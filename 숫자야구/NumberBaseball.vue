<template>
  <div>
    <h1>{{result}}</h1>
    <form @submit.prevent="onSubmitForm">
         <!--
                <form v-on:submit="onSubmitForm">에서 
                v-on대신에 @사용 가능
                @submit.prevent=""하면 e.preventDefualt가 자동적용됨
        -->
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{tries.length}}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script> // 자바스크립트 코드는 무조건 여기에
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };
  export default {
    data() { // 화면에 보이는 변수를 data와 methods에 선언
      return {
        answer: getNumbers(), // [1,5,3,4]
        tries: [], 
        value: '', 
        result: '', 
      }
    },
    methods: {
      onSubmitForm() {
        console.log('정답:'+this.answer);
        if (this.value === this.answer.join('')) { // 정답이면
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          this.result = '홈런';
          alert('게임을 다시 실행합니다.');
          this.value = '';
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        } else { // 정답 틀렸을 때
          let strike = 0; // 화면에 보이지 않는 요소는 data 외에 변수로 정의
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v));
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
              strike++;
            } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          });
          this.value = '';
          this.$refs.answer.focus();
        }
      }
    }
  };
</script>

<style>
</style>