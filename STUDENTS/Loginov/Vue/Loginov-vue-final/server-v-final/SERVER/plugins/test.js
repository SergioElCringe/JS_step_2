const fs = require('fs');

async function test() {
await fs.writeFileSync('../lol/testFile.vue', `

  <template>
    <div class="some">
      Some text
    </div>
  </template>

  <script>
    //some JS here
    export default {

    };
  </script>

  <style lang="scss" scoped>
    .some {
      margin: 0;
    }
  </style>

`);
}

test();