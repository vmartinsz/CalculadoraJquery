from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    value = request.form['value']

    try:
        result = eval(value)
        message = "Validação bem sucedida! O resultado é: {}".format(result)
        
    except ZeroDivisionError:
        message = "Não é possível dividir por 0"
    
    except Exception as e:
        message = f"Erro: Não foi possível calcular"

    return jsonify({'message': message})


if __name__ == '__main__':
    app.run(debug=True)
