<template>
  <div>
    <p>姓名：{{name}} 年龄：{{age}}</p>
    <button @click='changeAge'>同步改变年龄</button>
    <button @click='changeAgeAnsyc'>异步改变年龄</button>
  </div>
</template>

<script>

export default {

  name: 'HelloWorld',

  data() {
    return {

    }
  },

  computed: {
    // 原则：从store获取的数据写在computed中
    name() {
      return this.$store.getters.getName
    },
    age() {
      return this.$store.state.age
    }
  },

  mounted() {
    console.log('this.$store', this.$store)
  },

  methods: {

    changeAge: function() {
      // changeAge触发-->mutations里的mutationsChangeAge函数触发
      // mutationsChangeAge 是vuex中mutations的事件名
      // 1是传过去的数据
      this.$store.commit('mutationsChangeAge', 1)
    },

    // changeNumAnsyc触发-->actions里的actionsChangeAge函数被触发-->mutations里的mutationsChangeAgeAnsyc函数触发
    // actionsChangeAge 是vuex中actions的事件名
    // 3是传过去的数据
    changeAgeAnsyc: function() {
      this.$store.dispatch('actionsChangeAge', 3);
    },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
