from __main__ import api, Resource, request, subprocess, json, fields

ns_cisel_kub = api.namespace('cisel-nightwatch-kub', description='Operations related to nightwatch kubernetes')

# Classe Kubehunt avec doc
#####################################################
@ns_cisel_kub.route('/kubehunt')
class KubeHunt(Resource):
    @ns_cisel_kub.doc(params={'ipaddress': 'The Ip address of the cluster k8s'})
    def get(self):
        ipaddress = request.args.get('ipaddress')
        output = subprocess.check_output("kube-hunter --remote "+ipaddress+" --enable-cve-hunting --report json", shell=True)
        jsonoutput = json.loads(output.decode("utf-8"))
        return jsonoutput
        #return {'message': 'kubehunt yes'}

# Classe KubeSec avec doc
#####################################################
kubesecFields = ns_cisel_kub.model('kubesec model', {
    'url': fields.String(description='URL Git repo', required=True),
    'file': fields.String(description='File in the repo', required=True),
    'username': fields.String(description='username repo', required=False),
    'password': fields.String(description='password repo', required=False)
})

@ns_cisel_kub.route('/kubesec')
class KubeSec(Resource):
    @ns_cisel_kub.doc(body=kubesecFields)
    def post(self):
        username = None
        content = request.json
        urlGit = content['url']
        fileyaml = content['file']
        try:
            username = content['username']  
            password = content['password'] 
        except KeyError:
            print('data does not contain username and password')
        if username is None:
            subprocess.run("git clone "+urlGit, shell=True)
            print("git clone "+urlGit)
        else:
            urlend = urlGit.replace("http://","")
            urlend = urlend.replace("https://","")
            urlend = urlend.replace("www.","")
            urlwithpwd = "https://"+username+":"+password+"@"+urlend
            subprocess.run("git clone "+urlwithpwd, shell=True)
        #le r devant le kubesec c'est pour pas escape le backslash 
        result  = subprocess.run("kubesec scan "+fileyaml, stdout=subprocess.PIPE, shell=True)
        output = result.stdout.decode("utf-8")
        jsonoutput = json.loads(output)
        return jsonoutput
    
# Classe KubeBench avec doc
#####################################################
kubebenchFields = ns_cisel_kub.model('kubebench model', {
    'kubeconfig': fields.String(description='kubeconfig content 64bit encoded', required=True)
})

@ns_cisel_kub.route('/kubebench')
class KubeBench(Resource):
    @ns_cisel_kub.doc(body=kubebenchFields)
    def post(self):
        content = request.json
        kubeConfig = content['kubeconfig']
        subprocess.check_output("echo "+kubeConfig+" | base64 --decode >> /root/kubeconfig.cfg;", shell=True)
        output = subprocess.check_output("export KUBECONFIG=/root/kubeconfig.cfg; kube-bench --json;", shell=True)
        
        jsonoutput = json.loads(output)
        return jsonoutput