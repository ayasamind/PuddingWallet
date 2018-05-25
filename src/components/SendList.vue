<template>
 <Page class="page">
    <ActionBar class="action-bar" title="送金先一覧">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <Label class="body" textWrap=true text="SEND LIST"/>
    <!-- <ListView for="item in listOfItems" @itemTap="onItemTap"> -->
      <!-- <v-template> -->
      <!-- Shows the list item label in the default color and stye. -->
      <!-- <Label :text="item.text" /> -->
      <!-- </v-template> -->
    <!-- </ListView> -->
    <StackLayout>
      <Button class="btn btn-primary" @tap="sendMoney" text="送金"/>
    </StackLayout>
  </Page>
</template>

<script>
  export default {
      data() {
          return {
              listOfItems: null,
              sendMoney: null
          }
      }
  }
</script>

