from __main__ import api, Resource, request, subprocess, json, fields

ns_cisel_container = api.namespace('cisel-nightwatch-container', description='Operations related to nightwatch container')


# Classe Trivy avec doc
#####################################################
trivyFields = ns_cisel_container.model('trivy model', {
    'image': fields.String(description='Docker image', required=True),
    'username': fields.String(description='username repo', required=False),
    'password': fields.String(description='password repo', required=False)
})

@ns_cisel_container.route('/trivy')
class Trivy(Resource):
    @ns_cisel_container.doc(body=trivyFields)
    def post(self):
        username = None
        content = request.json
        image = content['image']
        try:
            username = content['username']  
            password = content['password'] 
        except KeyError:
            print('data does not contain username and password')
        trivyuserpassword = ""
        if username is None:
            print('nothing to do')
        else:
            trivyuserpassword = "export TRIVY_USERNAME="+username+";"+"export TRIVY_PASSWORD="+password+";"
        
        result  = subprocess.run(trivyuserpassword + "trivy image -f json "+image +" | sed -e/{/\{ -e:1 -en\;b1 -e\} -ed", stdout=subprocess.PIPE, shell=True)
        output = result.stdout.decode("utf-8")
        jsonoutput = json.loads(output)
        return jsonoutput