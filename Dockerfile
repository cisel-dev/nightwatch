# Download base image ubuntu 20.04
FROM ubuntu:20.04

# LABEL about the custom image
LABEL maintainer="cloud@cisel.ch"
LABEL version="0.1"
LABEL description="This is custom Docker Image for CISEL security scan"

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Update Ubuntu Software repository
RUN apt-get -qq update

# Install some base prerequisites
RUN apt-get -qq install git && \
    apt-get -qq install build-essential && \
    apt-get -qq install ufw && \
    apt-get -qq install net-tools && \
    apt-get -qq install vim && \
    apt-get -qq install curl && \
    echo | /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Go 1.17
RUN curl -L https://go.dev/dl/go1.17.3.linux-amd64.tar.gz -o go-linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go-linux-amd64.tar.gz && \
    sh -c 'echo "export PATH=$PATH:/usr/local/go/bin" >> /etc/profile' && \
    export PATH=$PATH:/usr/local/go/bin
    

# Install Kube-bench from source with specific release v0.6.5
RUN curl -L https://github.com/aquasecurity/kube-bench/releases/download/v0.6.5/kube-bench_0.6.5_linux_amd64.deb -o kube-bench_0.6.5_linux_amd64.deb && \
    apt-get -qq install ./kube-bench_0.6.5_linux_amd64.deb -f && \
        which kube-bench

# Install Kube-hunter from pip3 package
RUN apt-get -qq -y install python3-pip && \
    pip3 install kube-hunter

# Install Kubesec from source with specific release v2.11.4
RUN curl -L https://github.com/controlplaneio/kubesec/releases/download/v2.11.4/kubesec_linux_amd64.tar.gz -o kubesec_linux_amd64.tar.gz && \
    tar -xvf kubesec_linux_amd64.tar.gz && \
    mv kubesec /usr/local/bin/

# Install Kube-linter from brew
RUN PATH="/home/linuxbrew/.linuxbrew/bin:$PATH" && \
    echo 'export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"' >>~/.bash_profile && \
    brew install kube-linter

# Install latest Terrascan from the project repo
RUN curl -L "$(curl -s https://api.github.com/repos/accurics/terrascan/releases/latest | grep -o -E "https://.+?_Linux_x86_64.tar.gz")" > terrascan.tar.gz && \
    tar -xf terrascan.tar.gz terrascan && rm terrascan.tar.gz && \
    install terrascan /usr/local/bin && rm terrascan && \
    terrascan version

# Install Gitleaks from source
RUN git clone https://github.com/zricethezav/gitleaks.git && \
    export PATH=$PATH:/usr/local/go/bin && \
    cd gitleaks && \
    make build && \
    cp gitleaks /usr/local/bin

# Install Whispers from pip3
RUN pip3 install whispers

# Install detect-secrets from pip3
RUN pip3 install detect-secrets 

# Install trivy
RUN apt-get install wget apt-transport-https gnupg lsb-release
RUN wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | apt-key add -
RUN echo deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main | tee -a /etc/apt/sources.list.d/trivy.list
RUN apt-get update
RUN apt-get install trivy

## Install the prerequisites for the application
RUN apt-get -qq install net-tools nginx python3-pip
RUN pip install --upgrade pip

# Install kubectl
RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
RUN chmod +x ./kubectl
RUN mv ./kubectl /usr/local/bin/kubectl 

WORKDIR /
COPY . /
RUN pip3 --no-cache-dir install -r requirements.txt
RUN pip3 install flask-restplus
RUN pip3 install flask_cors

CMD ["python3", "app/__init__.py"]
