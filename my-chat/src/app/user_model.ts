export class User {
    username: string;
    password: string;
    email: string;
    role: string;
    group: string;
    channel: string;

    constructor(username: string, password: string, email:string, role:string, group: string, channel: string){
        this.username=username;
        this.password=password;
        this.email = email;
        this.role = role;
        this.group = group;
        this.channel = channel;
    }
}

export class sender {
    send: string;

    constructor(send:string){
        this.send=send;
    }
}

export class groupch {
    group: string;
    channel: string;

    constructor(group:string, channel: string){
        this.group=group;
        this.channel=channel;
    }
}