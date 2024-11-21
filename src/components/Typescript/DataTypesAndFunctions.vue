<template>
  <div>
    <div>Variables:</div>
    <div>{{ a }}</div>
    <div>{{ bruh }}</div>
    <div>{{ bool }}</div>
    <div>{{ num }}</div>
    <div>{{ str }}</div>
    <div>{{ bint }}</div>
    <div>{{ bint1 }}</div>
    <div>{{ anyType }}</div>
    <div>{{ `${arr[0]}, ${arr[1]}, ${arr[2]}` }}</div>
    <div>{{ `${arr1[0]}, ${arr1[1]}, ${arr1[2]}` }}</div>
  </div>
</template>

<script setup lang="ts">
  // type will be automaticly setted as init value
  let a = 'lol';
  a = 'kek';

  // constant
  const bruh: string = 'leru leru';

  // array
  let arr: number[] = [12, 34, 123];
  arr = [43, 65, 86];
  // alternative
  let arr1: Array<number> = [534, 65, 867];
  arr1 = [980, 47, 234];

  // boolean
  let bool: boolean = true;
  bool = false;

  // number
  let num: number = 123;
  num = 34;

  // string
  let str: string = 'Hello';
  str = 'uga buga';

  // bigint (for really big numbers)
  let bint: bigint = 344n;
  bint = 56n; 
  // or convert to bigint (i think that sucks way)
  let bint1: bigint = BigInt(534);
  bint1 = BigInt(2134);

  // multitype variable
  let anyType: any = 123;
  anyType = 'any';

  
</script>

