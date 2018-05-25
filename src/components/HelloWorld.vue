<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Hello world">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="This is a hello world component, tap the button if you dare"/>

      <Button class="btn btn-primary" @tap="surprise = !surprise" text="Tap me!"/>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>

      <!-- <Button class="btn btn-primary" @tap="scanbarcode()" text="Tap me!"/> -->

    </StackLayout>

  </Page>
</template>

<script>
  // var camera = require("nativescript-camera");
  // var BarcodeScanner = require("nativescript-barcodescanner").BarcodeScanner;
  // var barcodescanner = new BarcodeScanner();
  // // var barcodescanner = require("nativescript-barcodescanner");
  // import { Image } from "ui/image";
  
  export default {
    data () {
      return {
        surprise: false,
      };
    },
    // methods: {
      // enableCamera(){
      //   camera.requestPermissions();
      //   camera.takePicture().
      //   then((imageAsset) => {
      //     console.log("Result is an image asset instance");
      //     var image = new Image();
      //     image.src = imageAsset;
      //   }).catch((err) => {
      //     console.log("Error -> " + err.message);
      //   });
      // }
      // scanbarcode() {
      //   barcodescanner.scan({
      //     formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types
      //     cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
      //     cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
      //     message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
      //     showFlipCameraButton: true,   // default false
      //     preferFrontCamera: false,     // default false
      //     showTorchButton: true,        // default false
      //     beepOnScan: true,             // Play or Suppress beep on scan (default true)
      //     torchOn: false,               // launch with the flashlight on (default false)
      //     closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
      //     resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
      //     orientation: "landscape",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
      //     openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
      //   }).then((result) => {
      //       console.log("Scan format: " + result.format);
      //       console.log("Scan text:   " + result.text);
      //     },(error) => {
      //       console.log("No scan: " + error);
      //   });
      // }
    // }    
  };
</script>

<style scoped>
  .hello-world {
    margin: 30;
  }

  Label {
    color: red;
  }
</style>
