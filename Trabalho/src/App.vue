<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function () {},
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Graduação</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Painel</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Área do Aluno</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Área do Colaborador</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cadastro
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <a class="dropdown-item" href="/Aluno"
                    >Login Aluno
                    <ul
                      class="navbar-nav justify-content-end flex-grow-1 pe-3"
                    ></ul>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Colaborador"
                    >Login Colaborador
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
