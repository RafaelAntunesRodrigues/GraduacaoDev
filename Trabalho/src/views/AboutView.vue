<template>
  <div class="bode">
    <svg class="work" width="100" height="100" viewBox="0 0 40 60">
      <polygon
        class="triangle"
        fill="none"
        stroke="#fff"
        stroke-width="1"
        points="16,1 32,32 1,32"
      />
      <text class="loading" x="0" y="45" fill="#fff">Working...</text>
    </svg>

    <div class="buttons">
      <button href="/Aluno">Área do Aluno</button>
      <button>Área do Colaborador</button>
      <button>Cadastro</button>
    </div>
  </div>
</template>

<style>
.work {
  margin-top: 100px;
}

.bode {
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
}

.triangle {
  stroke-dasharray: 17;
  animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 136;
  }
}

.loading {
  font-family: "Orbitron", sans-serif;
  font-size: 7px;
  animation: blink 0.9s ease-in-out infinite alternate;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.buttons {
  display: flex;
  gap: 100px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 20px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
</style>
