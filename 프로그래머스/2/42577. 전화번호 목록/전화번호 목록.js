function solution(phone_book) {
    const map = new Map();

    // Map에 전화번호를 키로 추가
    for (let i = 0; i < phone_book.length; i++) {
        const phoneNumber = phone_book[i];
        map.set(phoneNumber, true);
    }

    // 각 전화번호에 대해 다른 전화번호의 접두어인지 확인
    for (let i = 0; i < phone_book.length; i++) {
        const phoneNumber = phone_book[i];
        for (let j = 1; j < phoneNumber.length; j++) {
            const prefix = phoneNumber.slice(0, j);
            if (map.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}
