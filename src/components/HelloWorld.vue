<template>
<div>
  <ul v-if="todos.length">
    <li v-for="(todo,index) in todos" :key="index">
      {{ todo }}
    </li>
    <li>all</li>
  </ul>
  <p v-else>No todos left!</p>
  <anchored-heading v-bind:level="1" ><div>中国<span>人民</span></div></anchored-heading>
</div>
</template>

<script>
  import Vue from 'vue';
    var getChildrenTextContent = function (children) {
        return children.map(function (node) {
            return node.children
                ? getChildrenTextContent(node.children)
                : node.text
        }).join('')
    }
    Vue.component('anchored-heading', {
        render: function (createElement) {
            // 创建 kebab-case 风格的 ID
            var headingId = getChildrenTextContent(this.$slots.default)
                .toLowerCase()
                .replace(/\W+/g, '-')
                .replace(/(^-|-$)/g, '')

            return createElement(
                'h' + this.level,
                {
                    attrs:{
                        id:'wc',
                        name:'frk',
                    },
                    class:{
                        foo:true,
                        bar:false,
                    },
                    style:{
                        color:'red'
                    },
                    props: {
                        myProp: 'bar'
                    },
                    // DOM property
                    domProps: {
                        innerHTML: 'baz'
                    },
                    // 事件监听器在 `on` 内，
                    // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
                    // 需要在处理函数中手动检查 keyCode。
                    on: {
                        click: this.clickHandler
                    },
                    // 仅用于组件，用于监听原生事件，而不是组件内部使用
                    // `vm.$emit` 触发的事件。
                    nativeOn: {
                        click: this.nativeClickHandler
                    },
                    // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
                    // 赋值，因为 Vue 已经自动为你进行了同步。
                    directives: [
                        {
                            name: 'my-custom-directive',
                            value: '2',
                            expression: '1 + 1',
                            arg: 'foo',
                            modifiers: {
                                bar: true
                            }
                        }
                    ],
                    // 作用域插槽的格式为
                    // { name: props => VNode | Array<VNode> }
                    scopedSlots: {
                        default: props => createElement('span', props.text)
                    },
                    // 如果组件是其它组件的子组件，需为插槽指定名称
                    slot: 'name-of-slot',
                    // 其它特殊顶层 property
                    key: 'myKey',
                    ref: 'myRef',
                    // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
                    // 那么 `$refs.myRef` 会变成一个数组。
                    refInFor: true

                },
                [
                    createElement('a', {
                        attrs: {
                            name: headingId,
                            href: '#' + headingId
                        }
                    }, this.$slots.default),
                    createElement('em', {
                        attrs: {
                            name: headingId,
                            href: '#' + headingId
                        }
                    }, this.$slots.default)
                ]
            )
        },
        props: {
            level: {
                type: Number,
                required: true
            }
        }
    })
export default {
  name: 'HelloWorld',
    data(){
      return {
          todos:[]
      }
    },
    render: function (createElement) {
        // 创建 kebab-case 风格的 ID
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '')

        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        },
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
