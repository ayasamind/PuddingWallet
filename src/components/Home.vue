<template>
  <Page class="page">
    <ActionBar class="action-bar" title="PuddingWallet"/>

    <StackLayout>
      <!-- <Button class="btn btn-primary" @tap="$router.push('/counter')">Pudding Coin</Button> -->
      <!-- <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button> -->
      <Button class="btn btn-primary" @tap="$router.push('/inputaddress')">アドレス入力・バーコード読み取り</Button>
      <Button class="btn btn-primary" @tap="$router.push('/sendlist')">送金先一覧</Button>
    </StackLayout>

  </Page>
</template>
