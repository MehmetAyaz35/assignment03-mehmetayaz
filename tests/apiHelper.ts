import { APIRequestContext } from "@playwright/test";

export class APIHelper {
    private baseUrl: string;
    private username: string;
    private token: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        
    }

    async login(request: APIRequestContext) {
        const username = process.env.TEST_USERNAME;
        const password = process.env.TEST_PASSWORD;
        
        if (!username || !password) {
            throw new Error("Username or password is missing from environment variables.");
        }
        
        const loginResponse = await request.post(`${this.baseUrl}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            })
        });
        const responseData = await loginResponse.json();
        this.username = responseData.username;
        this.token = responseData.token;
        return loginResponse;
    };


    async getAllClients(request: APIRequestContext) {
        const ClientsResponse = await request.get(`${this.baseUrl}/clients`, {
            headers: {
                'Content-Type': 'application/json',
                'x-user-auth': JSON.stringify({
                    username: this.username,
                    token: this.token
                })
            }
        });
        return ClientsResponse;
    };

    async createClient(request: APIRequestContext, payload: object) {
        const createClientresponse = await request.post(`${this.baseUrl}/client/new`, {
            headers: {
                'Content-Type': 'application/json',
                'x-user-auth': JSON.stringify({
                    username: this.username,
                    token: this.token
                })
            },
            data: JSON.stringify(payload)
        });
        return createClientresponse;
    };
    
};