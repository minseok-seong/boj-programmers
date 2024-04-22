function solution(priorities, location) {
    let answer = 0;
    let queue = [];

    // 1)
    queue = priorities.map((priority, index) => {
        return {priority, index}
    })

    // 2)
    while(queue.length > 0) {

        // 1. 실행 대기 큐에서 대기중인 프로세스 하나를 꺼냅니다.
        let current = queue.shift();

        // 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
        let isBig = queue.some(e => e.priority > current.priority);

        if(isBig) {
            queue.push(current);    
        } else {
            // 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
            //  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

            /*---------------------------
            * 더 이상 현재 값보다 높은 프로세스가 없기 때문에 
            * 큐를 없애며 location과 index가 같은 값이 나올 때까지 더해주면 결과 값이 도출된다.
            ---------------------------*/
            answer += 1;

            if(current.index == location) {
                break;
            }
        }

    }

    return answer;
}