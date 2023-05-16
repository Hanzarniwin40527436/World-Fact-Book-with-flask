from flask import Flask, render_template, request
import json

app = Flask(__name__)

w = json.load(open("static/worldl.json"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/country/<i>")
def country(i):
    return render_template("country.html", c = w[int(i)], next = 1+int(i))

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')
    
#REST interface for the world fact book
@app.route("/resttest")
def resttest():
    return render_template("resttest.html")

@app.route("/api/country/<i>", methods=['GET'])
def get(i):
    ret = next((c for c in w if c['id'] == int(i)),None)
    if ret:
        return ret
    return "not found", 404

@app.route("/api/country/<i>", methods = ['DELETE'])
def delete(i):
    global w
    w = [c for c in w if c['id'] != int(i)]
    json.dump(w, open("static/worldl.json","w"))
    return {}

@app.route("/api/country/<i>", methods = ['PUT'])
def put(i):
    #TODO - are, population, GDP, flag and tld are all missing
    ret = next((c for c in w if c['id'] == int(i)))
    payload = request.json
    ret['name'] =payload['name']
    ret['continent'] = payload['continent']
    ret['capital'] = payload['capital']
    w.append(ret)  
    json.dump(w, open("static/worldl.json","w"))
    return {}



if __name__ == '__main__':
    app.run(debug=True,port=5555)
