'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9780f073f65d590ce8951d1cfabb62d9",
"assets/assets/font/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/image/about_us.png": "3a558cf26cbac164b15cccc51821c929",
"assets/assets/image/call.png": "917863d0e098d9b696372372a986c2b8",
"assets/assets/image/cash_on_delivery.png": "27223f64aaff7de37038f029307ad291",
"assets/assets/image/checked.png": "f66f21ca8692618294ace64b4a60bfb2",
"assets/assets/image/coupon.png": "cfc95c5a80ed1e88f71ab60691b79aef",
"assets/assets/image/coupon_bg.png": "2edec7b5ddaa338a42f0dabfdb595b7a",
"assets/assets/image/delivery_location.png": "d0afbf0471aa1a0545edbf5d9334e627",
"assets/assets/image/delivery_man_marker.png": "ff4d6a62996c41bfbdd40f1729a65762",
"assets/assets/image/digital_payment.png": "49b1e3bc90ca48aa928007d5e9247aa0",
"assets/assets/image/efood.png": "c6d099f73b9809dad4041d1eb7886ee4",
"assets/assets/image/empty_box.png": "8a8a81d5d53c0e66da254034f672f3ff",
"assets/assets/image/empty_cart.png": "ced282db6ad362c0187e1973ff84597e",
"assets/assets/image/english.png": "f75e9c6d739e9e4154e7f48183769da1",
"assets/assets/image/f.png": "e795f76d3f55ee0af335c2065bf0a9d7",
"assets/assets/image/food0.png": "71540615b3ad4a80d399fc0a9a825aca",
"assets/assets/image/food1.png": "b4b9e6c61cecb8c4e7ab5dc62c124b5d",
"assets/assets/image/food11.png": "fe6f79ee97960badc953a84ceb18e520",
"assets/assets/image/food12.png": "213fec02f73bd0d21d093eaf07fec67f",
"assets/assets/image/food13.png": "7dee2cd01c9d8b24e2ea88a87100ef11",
"assets/assets/image/food14.jpeg": "ab722df6f488e760980716a35b3a4253",
"assets/assets/image/food15.jpeg": "29ffca3f6c4e2dca54f4d611ba619040",
"assets/assets/image/forgot.png": "9f55c7bc89433c2fea84955b94ef4c4b",
"assets/assets/image/g.png": "a87f61625fd6c74dec6fafd24e29b408",
"assets/assets/image/guest.png": "15b61a6abf52c4050dab93df36752904",
"assets/assets/image/house.png": "1c504c1a5c5563127c783a1c235f4037",
"assets/assets/image/language.png": "898e5b4c7c47345d97f91c2c7f377c8a",
"assets/assets/image/location.png": "da7e9406b80a9e4c6decd651991d5731",
"assets/assets/image/location_marker.png": "f429ec68aa7781aef972931d682f3563",
"assets/assets/image/lock.png": "1dc98b7e6cc1dc406dc8b19b94cedc49",
"assets/assets/image/loginbtn.png": "b30e3c49469287fa7c2018f4c65f86f3",
"assets/assets/image/loginimg.png": "ecd89b6ca476d872bb81d72da23e335f",
"assets/assets/image/logo%2520part%25201.png": "001ab8c404fc9a3e6acf5a5895590c4b",
"assets/assets/image/logo%2520part%25202.png": "3a9268b3265eec9fb3f8262376030966",
"assets/assets/image/logo_name.png": "2b5713bf62bae95a0b3ac51dc283846a",
"assets/assets/image/log_out.png": "2a4e0507a9000bf2579b00f94a3e47ac",
"assets/assets/image/mail.png": "249d5d5120f8dcdbf390b3de6f27e498",
"assets/assets/image/maintenance.png": "3cf6759b308c7c9731d5294f400038e1",
"assets/assets/image/map.png": "1cf454c171e3b482e558c56fd181869d",
"assets/assets/image/message.png": "ca9cfd0c532b6d96624b3b43e8962f24",
"assets/assets/image/my_location_marker.png": "fc74787f8fce199d9b2fddbfcf67e7b3",
"assets/assets/image/onboard_1.png": "66d47a3afe4bb354f14dd9724dcef335",
"assets/assets/image/onboard_2.png": "85e86ded1354d8190f639041d1a91b19",
"assets/assets/image/onboard_3.png": "7d95e32afdd985adc437a81b40906a28",
"assets/assets/image/pick_marker.png": "63f3dd1f11ed6d3e22aabf5bb488491a",
"assets/assets/image/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/image/policy.png": "b34dd2e7ac20b07c1c877c44179b6bdf",
"assets/assets/image/profile.png": "ef6c27f43a912324e3f9dbe4174b276d",
"assets/assets/image/profile_bg.png": "46f793bdd3732ad7f2878170017e6383",
"assets/assets/image/restaurant_cover.png": "db0d81f78a5f2fb0463032d0c47f78a2",
"assets/assets/image/restaurant_marker.png": "c79257f53b0eaff4e32b01a4d768d174",
"assets/assets/image/route.png": "aaec4a412a607a0291bee180e3cc1847",
"assets/assets/image/signintocontinue.png": "e9913d7d1ac2e99287d1af25a6ba9d68",
"assets/assets/image/signup.png": "35ac44e57caa8cef7ae0ca3f68a55c4b",
"assets/assets/image/support.png": "ecd41f9fa1b5d5fad3c527c2c0d64b9c",
"assets/assets/image/support_image.png": "0a7e6b1e601763c5ced8c770082069ca",
"assets/assets/image/t.png": "858dbeaab552a8063c9539552306f27f",
"assets/assets/image/terms.png": "09d3ca84434218336b985ae8159abcfe",
"assets/assets/image/tracking.png": "7fc12acaf51cb4cc1fccbce2e4ed4f93",
"assets/assets/image/update.png": "b7cfdbc8ad908a9db95e78e36a0edda8",
"assets/assets/image/user.png": "3c8bfcff49071020e373c4479bf65b9e",
"assets/assets/image/user_marker.png": "4fb391e4b52e6cdc170736c4893b6e62",
"assets/assets/image/warning.png": "9cdb1ba71f1be0698d4dd4aa33fcec08",
"assets/FontManifest.json": "569adbcb65082f8c8fed9d0f91829361",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "02301d7e04d4b8f03b9a4e5f89a5b44e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f825fc72ae0c94b1e7b0804b5c6fbf59",
"/": "f825fc72ae0c94b1e7b0804b5c6fbf59",
"main.dart.js": "1e4ff91539a3f8f8466808ba7ea2ec99",
"manifest.json": "6e9d15681b95afa691ca36d7791a9e22",
"version.json": "67ec5478ab9cfdf9c5ff8dc3c8e6110c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
