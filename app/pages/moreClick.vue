<script setup lang="ts">
import {ref} from 'vue'
import * as timers from "node:timers";
let count = ref(0);
let startTime;
let endTime;
let now;
function getSqlCheck(count:number,startTime:number,endTime:number,now:number) {
  if (count === 0){{
    startTime = Date.now();
    endTime = startTime;
  }else if(count > 0){
    now = Date.now();
    if(now - startTime >5000){
      startTime= now;
      endTime=now;
      count=0;
    }else{
      endTime = now;

    }
    if(count === 3){

      startTime = now;
      endTime = now;
      count = 0;
    }
    count++;


  }

  }
}
</script>

<template>
<header class="flex flex-left ml-3 font-bold text-3xl "></header>
  <button class="tex-blue-200" @click="getSqlCheck">按钮</button>
  <div class="flex flex-wrap justify-center items-center">{{count}}</div>

</template>

<style scoped>

</style>