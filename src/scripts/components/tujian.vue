<template>
  <div class="mainbox">
      <div class="title">
          <h3>图鉴</h3>
      </div>
      <div class="content">
          <ul>
              <router-link :to="{name:'servent'}"><li>英灵图鉴</li></router-link>
              <router-link :to="{name:'food'}"><li>素材图鉴</li></router-link>
              <router-link :to="{name:'craft'}"><li>礼装图鉴</li></router-link>
              <router-link :to="{name:'equip'}"><li>御主装备</li></router-link>
          </ul>
      </div>
  </div>
</template>
