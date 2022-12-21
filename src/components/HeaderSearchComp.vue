<template>
  <form class="main_form" action="sending_message" method="post">
    <ul class="search_field">
      <li class="browse_button" @click="isVisibleToggle()">
        <div class="header_dropdown">
          <p>Browse</p>
          <font-awesome-icon icon="fa-caret-down" class="caret" />
        </div>
      </li>
      <li class="main_form_input">
        <input type="text" placeholder="Search for Item...">
      </li>
      <li class="magnifier">
        <button type="button"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
      </li>
      <div class="dropdown_list" v-show="isVisible">
        <div class="browse_item">
          <h3 class="mega-heading">Women</h3>
          <a class="browse-link" href="#">Dresses</a>
          <a class="browse-link" href="#">Tops</a>
          <a class="browse-link" href="#">Sweaters/Knits</a>
          <a class="browse-link" href="#">Jackets/Coats</a>
          <a class="browse-link" href="#">Blazers</a>
          <a class="browse-link" href="#">Denim</a>
          <a class="browse-link" href="#">Leggings/Pants</a>
          <a class="browse-link" href="#">Skirts/Shorts</a>
          <a class="browse-link" href="#">Accessories</a>
        </div>
        <div class="browse_item">
          <h3 class="mega-heading">Men</h3>
          <a class="browse-link" href="#">Tees/Tank Tops</a>
          <a class="browse-link" href="#">Shirts/Polos</a>
          <a class="browse-link" href="#">Sweaters</a>
          <a class="browse-link" href="#">Sweatshirts/Hoodies</a>
          <a class="browse-link" href="#">Blazers</a>
          <a class="browse-link" href="#">Denim</a>
          <a class="browse-link" href="#">Jackets/Vests</a>
        </div>
      </div>
    </ul>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

function isVisibleToggle() {
  isVisible.value = !isVisible.value
}
</script>

<style scoped lang="scss">
.main_form {
  flex: 2;
  margin-left: 5%;
  position: relative;

  .search_field {
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 100%;

    .browse_button {
      flex: 22%;
      background-color: #cdcdcc;
      cursor: pointer;
      background-image: linear-gradient(180.0deg, #f9f9f9 0%, #f5f5f5 100%);

      .header_dropdown {
        height: 36px;
        border: 1px solid #e6e6e6;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;


        p {
          font-family: Lato;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.025em;
          color: #222222;
          transition: all 0.5s;
          cursor: pointer;
          margin-right: 5%;
        }

        .caret {
          font-size: 14px;
          padding-bottom: 1%;
          color: #838383;
          transition: all 0.5s;
        }
      }

      .header_dropdown:hover {
        background-color: #696666;

        p {
          color: #fff;
        }

        .caret {
          color: #fff;
        }
      }
    }

    .browse_button:hover {
      background-color: #222222;
    }

    .main_form_input {
      flex: 69%;

      input {
        background-color: #ffffff;
        border: 1px solid #e6e6e6;
        border-right-width: 0px;
        border-left-width: 0px;
        width: 100%;
        height: 36px;
        padding-left: 10px;
      }
    }

    .magnifier {
      flex: 9%;

      button {
        background-color: #ffffff;
        border: 1px solid #e6e6e6;
        border-radius: 0px 3px 3px 0px;
        transition: all 0.5s;
        color: #a4a4a4;
        cursor: pointer;
        width: 100%;
        height: 38px;
      }

      button:hover {
        background-color: #696666;
        color: #fff;
      }
    }

    .dropdown_list {
      position: absolute;
      z-index: 1;
      top: 38px;
      width: 74%;

      .browse_item {
        background-color: white;
        padding-left: 20px;
        padding-right: 143px;

        .mega-heading {
          font-family: Lato;
          font-size: 14px;
          font-weight: 400;
          text-transform: uppercase;
          border-bottom: 1px solid #e8e8e8;
          width: 235px;
          margin-bottom: 10px;
          padding-bottom: 8px;
        }

        .browse-link {
          display: block;
          text-decoration: none;
          color: #646464;
          font-family: Lato;
          font-size: 14px;
          font-weight: 400;
          line-height: 28px;
        }

        .browse-link:hover {
          color: #f16d7f;
        }
      }

      .browse_item:first-of-type {
        margin-top: 20px;
      }

      .browse_item:last-of-type {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }
}
</style>