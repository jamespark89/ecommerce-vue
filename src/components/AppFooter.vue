<template>
  <footer>
    <section class="callout">
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ullam
        ratione ad consequuntur beatae quo autem rem harum aspernatur, molestias
        facere, iure cum, molestiae error. Obcaecati blanditiis repellendus
        error amet.
      </h2>
      <p>James Park</p>
    </section>

    <div class="jamesstuff">
      <p>
        This project is made by James Park,

        <a href="https://github.com/jamespark89">@jamespark89 (github)</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url('../../public/callout.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}

.jamesstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>
