<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <title>
      NFT's |
   </title>
</head>


<div id="loading" class="preloader">
   <div class="frame">
      <div class="center">
         <div class="dot-1"></div>
         <div class="dot-2"></div>
         <div class="dot-3"></div>
      </div>
   </div>
</div>
<!-- Top Button -->
<i id="topButton" class="icon icon-up4 over-top-i" style="opacity:0;"></i>
<!-- Top Button End -->

<? include 'assets/assets.php'; ?>
<? include 'modules/layouts/header.php'; ?>
<style>
   body .content {
      display: block;
      position: relative;
      z-index: 5;
      overflow-x: hidden;
      overflow-y: hidden;
   }

   #closeToggle {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
   }
</style>

<body>
   <main>
      <content class="content">
         <? include 'modules/banner.php'; ?>
         <? include 'modules/bidding.php'; ?>
         <? include 'modules/create.php'; ?>
         <? include 'modules/items.php'; ?>
         <? include 'modules/topSeller.php'; ?>
         <? include 'modules/exploreProducts.php'; ?>
         <? include 'modules/topCollection.php'; ?>
      </content>
   </main>
   <div id="closeToggle" style="display: none;"></div>
</body>
<? include 'modules/layouts/footer.php'; ?>

</html>