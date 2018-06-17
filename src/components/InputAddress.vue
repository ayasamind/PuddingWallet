<template>
 <Page class="page">
    <ActionBar class="action-bar" title="アドレス入力">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="送金先のアドレスを入力してください"/>
      <TextField v-model="sampleurl" />
      <Label class="body" textWrap=true text="金額を入力してください"/>
      <TextField v-model="price" />
      <Button class="btn btn-primary" @tap="sendEther()" text="送金！"/>
      <Label class="body" textWrap=true text="バーコードを読み取る"/>
      <Button class="btn btn-primary" @tap="scanBarcode()" text="カメラ起動"/>
    </StackLayout>    
  </Page>
</template>

<script>
  const httpModule = require("http");
  var BarcodeScanner = require("nativescript-barcodescanner").BarcodeScanner;
  var barcodescanner = new BarcodeScanner();
//   import send from "./send";

  export default {
      data() {
          return {
              //初期値は空
              sampleurl: '',
          }
      },
      methods: {
          sendEther(){
                console.log('kawano');
                httpModule.request({
                    url: "https://httpbin.org/post",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        sendee: this.sendee,
                        price: this.price,
                        sender: this.sender,
                    })
                }).then((response) => {
                    const result = response.content.toJSON();
                }, (e) => {
                });              
          },
        scanBarcode() {
            barcodescanner.scan({
                formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types
                cancelLabel: "Close Barcode Scanner", // iOS only, default 'Close'
                cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                showFlipCameraButton: true,   // default false
                preferFrontCamera: false,     // default false
                showTorchButton: true,        // default false
                beepOnScan: true,             // Play or Suppress beep on scan (default true)
                torchOn: false,               // launch with the flashlight on (default false)
                closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
                resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                orientation: "landscape",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
                openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
          }).then((result) => {
            console.log("Scan format: " + result.format);
            console.log("Scan text:   " + result.text);
            alert("送金先アドレスは" + result.text + "です");
            this.sampleurl = result.text;
          },(error) => {
            console.log("No scan: " + error);
          });
        }
      }
  }

</script>

