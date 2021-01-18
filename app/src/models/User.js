"use strict";

const UserStorage = require("./UserStorage");


class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, psword } = UserStorage.getUserInfo(this.body.id);
        console.log(id, psword);

        if (id) {
            if (id === this.body.id && pwsord === this.body.psword) {
                return { success: true }
            }
            return { success: false, msg: "비밀번호가 틀렷습니다."};
        }
        return { success: false, msg: "존재하지 않느 ㄴ아이디 입니다."};
    }
}

module.exports = User;