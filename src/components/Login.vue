<template>
  <Page class="page">
    <ActionBar class="action-bar" title="PuddingWallet"/>

    <StackLayout>
      <Label class="body" textWrap=true text="ユーザー名"/>
      <TextField v-model="username"/>
      <Label class="body" textWrap=true text="パスワード"/>
      <TextField v-model="username"/>
      <Button class="btn btn-primary loginbtn" @tap="$router.push('/home')" text="ログイン"/>
    </StackLayout>

  </Page>
</template>

<script>
// import Amplify from 'aws-amplify';

//     Amplify.configure({
//     Auth: {
//         // フェデレーションアイデンティティのID
//         identityPoolId: 'ap-northeast-1:******************',
//         // リージョン
//         region: 'ap-northeast-1',
//         // ユーザープールのID
//         userPoolId: 'ap-northeast-1_jHcNkLeqZ',
//         // ユーザープールのウェブクライアントID
//         userPoolWebClientId: '*******************',
//         mandatorySignIn: true,
//     },
//     Storage: {
//         bucket: 'yoshino-cognito', //使用するS3バケット名
//         region: 'ap-northeast-1', //リージョン
//     }})
</script>

<style scoped>
  .loginbtn {
    color: yellow
  }
</style>