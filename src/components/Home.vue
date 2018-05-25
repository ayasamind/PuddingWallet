<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Pudding Coin</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
    </StackLayout>

  </Page>
</template>
