from flask_restful import Api, Resource, reqparse

class ApiHandler(Resource):
    def get(self):
        return {
            'resultStatus': 'SUCCESS',
            'message': 'Api Handler'
        }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()
        print(args)

        request_type = args['type']
        request_json = args['message']
        ret_status = request_type
        ret_msg = request_json

        message = f'Your message requested: {ret_msg}' if ret_msg else 'No Msg'

        return {
            'status': 'Success',
            'message': message
        }
