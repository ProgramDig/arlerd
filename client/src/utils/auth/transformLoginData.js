
export default function transformLoginData_(userLoginDto){
    const data = {
        email: userLoginDto.nickname.indexOf("@") !== -1 ? userLoginDto.nickname : null,
        login: userLoginDto.nickname.indexOf("@") !== -1 ? null : userLoginDto.nickname,
        password: userLoginDto.password
    };
    return {...data};
}
