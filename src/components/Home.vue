<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">C</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
    </StackLayout>

  </Page>
</template>
