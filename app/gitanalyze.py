from __main__ import api, Resource, request, subprocess, json, fields

ns_cisel_git = api.namespace('cisel-nightwatch-git', description='Operations related to nightwatch git')


# Classe KubeLint avec doc
#####################################################
kubelintFields = ns_cisel_git.model('kubelint model', {
    'url': fields.String(description='URL Git repo', required=True),
    'folder': fields.String(description='Folder in the repo', required=True),
    'username': fields.String(description='username repo', required=False),
    'password': fields.String(description='password repo', required=False)
})

@ns_cisel_git.route('/kubelint')
class KubeLint(Resource):
    @ns_cisel_git.doc(body=kubelintFields)
    def post(self):
        username = None
        content = request.json
        urlGit = content['url']
        folder = content['folder']
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
        result  = subprocess.run("export PATH=\"/home/linuxbrew/.linuxbrew/bin:$PATH\"; kube-linter lint --format=json "+folder+";", stdout=subprocess.PIPE, shell=True)
        output = result.stdout.decode("utf-8")
        jsonoutput = json.loads(output)
        return jsonoutput

# Classe Terrascan avec doc
#####################################################
terrascanFields = ns_cisel_git.model('terrascan model', {
    'url': fields.String(description='URL Git repo', required=True),
    'folder': fields.String(description='Folder in the repo', required=True),
    'username': fields.String(description='username repo', required=False),
    'password': fields.String(description='password repo', required=False)
})

@ns_cisel_git.route('/terrascan')
class Terrascan(Resource):
    @ns_cisel_git.doc(body=terrascanFields)
    def post(self):
        username = None
        content = request.json
        urlGit = content['url']
        folder = content['folder']
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
        result  = subprocess.run("terrascan init; terrascan scan --iac-dir "+folder+" --show-passed --output json -i k8s;", stdout=subprocess.PIPE, shell=True)
        output = result.stdout.decode("utf-8")
        jsonoutput = json.loads(output)
        return jsonoutput
    
# Classe GitLeaks avec doc
#####################################################
gitleaksFields = ns_cisel_git.model('gitleaks model', {
    'url': fields.String(description='URL Git repo', required=True),
    'folder': fields.String(description='Folder in the repo', required=True),
    'username': fields.String(description='username repo', required=False),
    'password': fields.String(description='password repo', required=False)
})

@ns_cisel_git.route('/gitleaks')
class GitLeaks(Resource):
    @ns_cisel_git.doc(body=gitleaksFields)
    def post(self):
        username = None
        content = request.json
        urlGit = content['url']
        folder = content['folder']
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
        result  = subprocess.run("gitleaks detect -v -s "+folder+" -f json -c /gitleaks/config/gitleaks.toml;", stdout=subprocess.PIPE, shell=True)
        output = result.stdout.decode("utf-8")
        #jsonoutput = json.loads(output)
        return output