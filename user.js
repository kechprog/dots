// [NOTE] Dark Reader users may want to use 1000 [3].
//user_pref("nglayout.initialpaint.delay", 5); // DEFAULT; formerly 250
    //user_pref("nglayout.initialpaint.delay_in_oopif", 5); // DEFAULT
// Rather than wait until a page has completely downloaded to display it to the user,
//user_pref("content.notify.ontimer", true); // DEFAULT
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
// [2] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtab.preload", true); // DEFAULT
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);
//user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
    //user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT
//user_pref("browser.startup.preXulSkeletonUI", false);
//user_pref("dom.iframe_lazy_loading.enabled", true); // DEFAULT [FF121+]
//user_pref("gfx.webrender.all", true); // enables WR + additional features
//user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
//user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
    //user_pref("gfx.webrender.compositor.force-enabled", true); // enforce
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // LINUX
//user_pref("gfx.canvas.accelerated", true); // DEFAULT macOS LINUX [FF110]; not compatible with WINDOWS integrated GPUs
    user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; Chrome=4096
    user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512
    user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
//user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
    //user_pref("layers.gpu-process.force-enabled", true); // enforce
    //user_pref("layers.mlgpu.enabled", true); // LINUX
//user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
    //user_pref("media.hardware-video-decoding.force-enabled", true); // enforce
//user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS
//user_pref("media.ffmpeg.vaapi.enabled", true); // LINUX
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true); // enforce
//user_pref("browser.cache.disk.enable", true); // DEFAULT
//user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
//user_pref("browser.cache.disk.capacity", 512000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
//user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache
//user_pref("network.http.rcwn.enabled", false);
//user_pref("network.http.rcwn.small_resource_size_kb", 256); // DEFAULT
//user_pref("browser.cache.disk.metadata_memory_limit", 500); // default=250 (0.25 MB); limit of recent metadata we keep in memory for faster access
//user_pref("browser.cache.disk.preload_chunk_count", 4); // DEFAULT
//user_pref("browser.cache.frecency_half_life_hours", 6); // DEFAULT
//user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.check_doc_frequency", 3); // DEFAULT
//user_pref("browser.cache.disk.free_space_soft_limit", 10240); // default=5120 (5 MB)
//user_pref("browser.cache.disk.free_space_hard_limit", 2048); // default=1024 (1 MB)
user_pref("browser.cache.jsbc_compression_level", 3);
//user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
//user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT
//user_pref("browser.cache.memory.capacity", -1); // DEFAULT; 256000=256 MB; 512000=500 MB; 1048576=1GB, 2097152=2GB
//user_pref("browser.cache.memory.max_entry_size", 10240); // (10 MB); default=5120 (5 MB)
//user_pref("browser.sessionhistory.max_total_viewers", 4);
//user_pref("media.cache_size", 512000); // DEFAULT
// [2] https://github.com/arkenfox/user.js/pull/941
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072
//user_pref("media.memory_caches_combined_limit_kb", 524288); // DEFAULT; alt=1048576
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 5); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches
//user_pref("media.mediasource.enabled", true); // DEFAULT
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold
//user_pref("image.cache.size", 5242880); // DEFAULT; in MiB; alt=10485760 (cache images up to 10MiB in size)
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used
//user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
//user_pref("network.buffer.cache.count", 128); // default=24
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
    user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
    //user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.websocket.max-connections", 200); // DEFAULT
user_pref("network.http.pacing.requests.enabled", false);
    //user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
    //user_pref("network.http.pacing.requests.burst", 14); // default=10
//user_pref("network.dnsCacheEntries", 1000); // default=400
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
    //user_pref("network.dnsCacheExpirationGracePeriod", 240); // default=60; cache DNS entries for 4 minutes after they expire
//user_pref("network.dns.max_high_priority_threads", 40); // DEFAULT [FF 123?]
//user_pref("network.dns.max_any_priority_threads", 24); // DEFAULT [FF 123?]
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)
// [NOTE] Add prefs to "MY OVERRIDES" section and uncomment to enable them in your user.js.
// If the user follows through, pages can load faster since some
//user_pref("network.http.speculative-parallel-limit", 20); // DEFAULT (FF127+?)
user_pref("network.dns.disablePrefetch", true);
    user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]
// [2] https://github.com/arkenfox/user.js/issues/1870#issuecomment-2220773972
//user_pref("dom.prefetch_dns_for_anchor_http_document", false); // [FF128+]
//user_pref("dom.prefetch_dns_for_anchor_https_document", false); // DEFAULT [FF128+]
//user_pref("network.preconnect", true); // DEFAULT
// Firefox preloads URLs that autocomplete when a user types into the address bar.
//user_pref("browser.urlbar.speculativeConnect.enabled", false);
//user_pref("browser.places.speculativeConnect.enabled", false);
//user_pref("network.modulepreload", true); // DEFAULT
user_pref("network.prefetch-next", false);
//user_pref("network.fetchpriority.enabled", true);
//user_pref("network.early-hints.enabled", true);
//user_pref("network.early-hints.preconnect.enabled", true);
//user_pref("network.early-hints.preconnect.max_connections", 10); // DEFAULT
user_pref("network.predictor.enabled", false);
// Prefetch page resources based on past user behavior.
//user_pref("network.predictor.enable-prefetch", false); // DEFAULT
//user_pref("network.predictor.enable-hover-on-ssl", false); // DEFAULT
//user_pref("network.predictor.preresolve-min-confidence", 60); // DEFAULT
//user_pref("network.predictor.preconnect-min-confidence", 90); // DEFAULT
//user_pref("network.predictor.prefetch-min-confidence", 100); // DEFAULT
//user_pref("network.predictor.prefetch-force-valid-for", 10); // DEFAULT; how long prefetched resources are considered valid and usable (in seconds) for the prediction modeling
//user_pref("network.predictor.prefetch-rolling-load-count", 10); // DEFAULT; the maximum number of resources that Firefox will prefetch in memory at one time based on prediction modeling
//user_pref("network.predictor.max-resources-per-entry", 250); // default=100
//user_pref("network.predictor.max-uri-length", 1000); // default=500
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
//user_pref("dom.webgpu.enabled", true);
    //user_pref("gfx.webgpu.force-enabled", true); // enforce
//user_pref("dom.webgpu.indirect-dispatch.enabled", true);
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT
//user_pref("browser.low_commit_space_threshold_mb", 3276); // default=200; WINDOWS LINUX
//user_pref("browser.low_commit_space_threshold_percent", 20); // default=5; LINUX
//user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000
//user_pref("dom.ipc.processCount", 8); // DEFAULT; Shared Web Content
//user_pref("dom.ipc.processCount.webIsolated", 1); // default=4; Isolated Web Content
//user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", true); // DEFAULT
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin
//user_pref("fission.webContentIsolationStrategy", 2);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin (high value)
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors
//user_pref("fission.webContentIsolationStrategy", 0);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors
 * credit urL: https://github.com/arkenfox/user.js                          *
//user_pref("privacy.trackingprotection.enabled", true); // enabled with "Strict"
//user_pref("privacy.trackingprotection.pbmode.enabled", true); // DEFAULT
//user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false); // DEFAULT
user_pref("browser.contentblocking.category", "strict");
//user_pref("privacy.trackingprotection.socialtracking.enabled", true); // enabled with "Strict"
    //user_pref("privacy.socialtracking.block_cookies.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.cryptomining.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.emailtracking.enabled", true); // enabled with "Strict"
//user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // enabled with "Strict"
//user_pref("privacy.annotate_channels.strict_list.enabled", true); // enabled with "Strict"
    //user_pref("privacy.annotate_channels.strict_list.pbmode.enabled", true); // DEFAULT
//user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+] enabled with "Strict"
    //user_pref("privacy.fingerprintingProtection.pbmode", true); // DEFAULT
//user_pref("privacy.query_stripping.enabled", true); // enabled with "Strict"
//user_pref("privacy.query_stripping.enabled.pbmode", true); // enabled with "Strict"
//user_pref("privacy.query_stripping.strip_list", ""); // DEFAULT
//user_pref("privacy.query_stripping.strip_on_share.enabled", true);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"); // MANUAL
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // MANUAL
// [1] https://github.com/arkenfox/user.js/issues/102#issuecomment-298413904
//user_pref("privacy.trackingprotection.lower_network_priority", true);
//user_pref("fission.autostart", true); // DEFAULT [DO NOT TOUCH]
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("security.sandbox.gpu.level", 1); // DEFAULT WINDOWS
// location to every website a user visits.
// context. dFPI isolates user's browsing data for each top-level eTLD+1, but is flexible enough to apply web
// [4] https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/
// [6] https://github.com/arkenfox/user.js/issues/1281
//user_pref("network.cookie.cookieBehavior", 5); // DEFAULT FF103+
//user_pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true); // DEFAULT
//user_pref("privacy.partition.network_state", true); // DEFAULT
    //user_pref("privacy.partition.serviceWorkers", true); // [DEFAULT: true FF105+]
    //user_pref("privacy.partition.network_state.ocsp_cache", true); // enabled with "Strict" [DEFAULT: true FF123+]
    //user_pref("privacy.partition.bloburl_per_partition_key", true); // [FF118+]
//user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true); // [DEFAULT: true FF109+]
//user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false); // [DEFAULT: false FF109+]
//user_pref("extensions.webcompat.enable_shims", true); // enabled with "Strict"
// haven’t received a top-level user interaction (including scroll) within the last 45 days.
// [5] https://github.com/arkenfox/user.js/issues/1089
//user_pref("privacy.purge_trackers.enabled", true); // DEFAULT
//user_pref("privacy.bounceTrackingProtection.enabled", true);
//user_pref("privacy.bounceTrackingProtection.enableDryRunMode", false); // false enables tracker data purging
// [3] https://github.com/arkenfox/user.js/issues/1640#issuecomment-1464093950
//user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
//user_pref("network.cookie.sameSite.schemeful", true);
//user_pref("browser.send_pings", false); // DEFAULT
// [2] https://github.com/arkenfox/user.js/issues/1586
//user_pref("beacon.enabled", false);
//user_pref("dom.battery.enabled", false);
// [2] https://github.com/arkenfox/user.js/issues/1732
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
    //user_pref("browser.uitour.url", "");
//user_pref("devtools.debugger.remote-enabled", false); // DEFAULT
// A privacy signal that tells the websites that the user
// [3] https://github.com/arkenfox/user.js/issues/1542#issuecomment-1279823954
user_pref("privacy.globalprivacycontrol.enabled", true);
    //user_pref("privacy.globalprivacycontrol.functionality.enabled", true); // [FF120+]
//user_pref("privacy.globalprivacycontrol.pbmode.enabled", true); // [FF120+]
// [3] https://github.com/arkenfox/user.js/issues/1576#issuecomment-1304590235
user_pref("security.OCSP.enabled", 0);
//user_pref("security.OCSP.require", true);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// By default, pinning enforcement is not applied if a user-installed
// certificate authority (CA) is present. However, this allows user-installed
// 0=disabled, 1=allow user MiTM (such as your antivirus) (default), 2=strict
//user_pref("security.cert_pinning.enforcement_level", 2);
// For users trying to get intranet sites on managed networks,
//user_pref("security.enterprise_roots.enabled", false);
    //user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
//user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT]
//user_pref("browser.contentanalysis.default_result", 0; // [FF127+] [DEFAULT]
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
//user_pref("security.ssl.require_safe_negotiation", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
// [1] https://github.com/arkenfox/user.js/issues/1661
//user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
//user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);
//user_pref("privacy.resistFingerprinting", true);
//user_pref("privacy.window.maxInnerWidth", 1600);
//user_pref("privacy.window.maxInnerHeight", 900);
// [1] https://github.com/arkenfox/user.js/issues/1618
//user_pref("browser.startup.blankWindow", false);
//user_pref("browser.display.use_system_colors", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// Firefox periodically saves the user's session so it can restore
user_pref("browser.sessionstore.interval", 60000); // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min
//user_pref("browser.sessionstore.privacy_level", 2);
//user_pref("toolkit.winRegisterApplicationRestart", false);
//user_pref("browser.shell.shortcutFavicons", false);
//user_pref("browser.helperApps.deleteTempFileOnExit", true); // DEFAULT [FF108]
//user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
//user_pref("privacy.sanitize.timeSpan", 0);
//user_pref("privacy.clearSiteData.cache", true);
//user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false until it respects "allow" site exceptions
//user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
    //user_pref("privacy.clearSiteData.siteSettings", false);
//user_pref("privacy.cpd.cache", true); // [DEFAULT]
//user_pref("privacy.clearHistory.cache", true);
//user_pref("privacy.cpd.formdata", true); // [DEFAULT]
//user_pref("privacy.cpd.history", true); // [DEFAULT]
    //user_pref("privacy.cpd.downloads", true); // not used; see note above
//user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
//user_pref("privacy.cpd.cookies", false);
//user_pref("privacy.cpd.sessions", true); // [DEFAULT]
//user_pref("privacy.cpd.offlineApps", false); // [DEFAULT]
//user_pref("privacy.clearHistory.cookiesAndStorage", false);
    //user_pref("privacy.cpd.openWindows", false); // Session Restore
   //user_pref("privacy.cpd.passwords", false);
   //user_pref("privacy.cpd.siteSettings", false);
   //user_pref("privacy.clearHistory.siteSettings", false);
user_pref("privacy.history.custom", true);
// [2] https://github.com/arkenfox/user.js/issues/1291
//user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//user_pref("privacy.clearOnShutdown.cache", true); // [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.cache", true); // [FF128+] [DEFAULT]
//user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT]
//user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT]
//user_pref("privacy.clearOnShutdown.history", true);   // [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // [FF128+] [DEFAULT]
    //user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT]
    //user_pref("privacy.clearOnShutdown_v2.siteSettings", false); // [FF128+] [DEFAULT]
//user_pref("privacy.clearOnShutdown.openWindows", true);
//user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
//user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
//user_pref("privacy.clearOnShutdown.sessions", true);  // Active Logins [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // Cookies, Site Data, Active Logins [FF128+]
//user_pref("browser.urlbar.trimURLs", true); // DEFAULT
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
//user_pref("browser.urlbar.showSearchTerms.enabled", false);
    //user_pref("browser.urlbar.showSearchTerms.featureGate", false); // DEFAULT
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
    //user_pref("browser.search.separatePrivateDefault", true); // DEFAULT
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // HIDDEN
user_pref("browser.search.suggest.enabled", false);
    //user_pref("browser.search.suggest.enabled.private", false); // DEFAULT
user_pref("browser.urlbar.suggest.searches", false);
// [1] https://github.com/arkenfox/user.js/issues/1257
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+] 
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
//user_pref("browser.fixup.alternate.enabled", false); // [DEFAULT FF104+]
//user_pref("browser.urlbar.autoFill", false);
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
user_pref("network.IDN_show_punycode", true);
user_pref("dom.security.https_first", true); // [DEFAULT FF129+]
//user_pref("dom.security.https_first_pbm", true); // [DEFAULT FF91+]
//user_pref("dom.security.https_first_schemeless", true); // [FF120+] [DEFAULT FF129+]
//user_pref("dom.security.https_only_mode_pbm", true); // Private Browsing windows only
//user_pref("dom.security.https_only_mode", true); // Normal + Private Browsing windows
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
//user_pref("dom.security.https_only_mode_send_http_background_request", true); // DEFAULT
    //user_pref("dom.security.https_only_fire_http_request_background_timer_ms", 3000); // DEFAULT
//user_pref("dom.security.https_only_mode.upgrade_local", false); // DEFAULT
//user_pref("network.trr.mode", 0); // DEFAULT
//user_pref("network.trr.max-fails", 5); // default=15
//user_pref("network.trr_ui.show_fallback_warning_option", false); // DEFAULT
//user_pref("network.trr.display_fallback_warning", false); // DEFAULT
//user_pref("network.trr.uri", "https://xxxx/dns-query");
    //user_pref("network.trr.custom_uri", "https://xxxx/dns-query");
//user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]
//user_pref("network.trr.resolvers", '[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "SecureDNS", "url": "https://doh.securedns.eu/dns-query" },{ "name": "AppliedPrivacy", "url": "https://doh.appliedprivacy.net/query" },{ "name": "Digitale Gesellschaft (CH)", "url": "https://dns.digitale-gesellschaft.ch/dns-query" }, { "name": "Quad9", "url": "https://dns.quad9.net/dns-query" }]');
// in suboptimal routing between CDN origins and end users [2].
//user_pref("network.trr.disable-ECS", true); // DEFAULT
//user_pref("network.trr.allow-rfc1918", false); // DEFAULT
//user_pref("network.trr.confirmationNS", "skip"); // skip undesired DOH test connection
//user_pref("network.trr.skip-AAAA-when-not-supported", true); // [DEFAULT] If Firefox detects that your system does not have IPv6 connectivity, it will not request IPv6 addresses from the DoH server
//user_pref("network.trr.clear-cache-on-pref-change", true); // [DEFAULT] DNS+TRR cache will be cleared when a relevant TRR pref changes
//user_pref("network.trr.wait-for-portal", false); // [DEFAULT] set this to true to tell Firefox to wait for the captive portal detection before TRR is used
//user_pref("network.trr.excluded-domains", ""); // DEFAULT; comma-separated list of domain names to be resolved using the native resolver instead of TRR. This pref can be used to make /etc/hosts works with DNS over HTTPS in Firefox.
//user_pref("network.trr.builtin-excluded-domains", "localhost,local"); // DEFAULT; comma-separated list of domain names to be resolved using the native resolver instead of TRR
//user_pref("network.trr.mode", 2);
//user_pref("network.trr.ohttp.config_uri", "https://dooh.cloudflare-dns.com/.well-known/doohconfig");
//user_pref("network.trr.ohttp.uri", "https://dooh.cloudflare-dns.com/dns-query");
//user_pref("network.trr.ohttp.relay_uri", ""); // custom
//user_pref("network.trr.use_ohttp", true);
//user_pref("network.dns.echconfig.enabled", true); // use ECH for TLS Connections
//user_pref("network.dns.http3_echconfig.enabled", true); // use ECH for QUIC connections
//user_pref("network.dns.echconfig.fallback_to_origin_when_all_failed", false); // fallback to non-ECH without an authenticated downgrade signal
//user_pref("network.dns.disableIPv6", true);
//user_pref("network.proxy.socks_remote_dns", true);
//user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
//user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT FF118+]
//user_pref("network.notify.checkForProxies", false);
//user_pref("signon.rememberSignons", false);
    //user_pref("signon.rememberSignons.visibilityToggle", true); // DEFAULT
    //user_pref("signon.schemeUpgrades", true); // DEFAULT
    //user_pref("signon.showAutoCompleteFooter", true); // DEFAULT
    //user_pref("signon.autologin.proxy", false); // DEFAULT
// PREF: disable auto-filling username & password form fields
//user_pref("signon.autofillForms", false);
//user_pref("signon.autofillForms.autocompleteOff", true); // DEFAULT
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
//user_pref("signon.autofillForms.http", false); // DEFAULT
//user_pref("signon.generation.enabled", false);
// [NOTE] No usernames or passwords are sent to third-party sites.
// user_pref("signon.management.page.breach-alerts.enabled", false); 
    //user_pref("signon.management.page.breachAlertUrl", "");
//user_pref("browser.contentblocking.report.lockwise.enabled", false);
    //user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
//user_pref("signon.firefoxRelay.feature", "");
//user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
//user_pref("layout.forms.reveal-password-context-menu.enabled", true); // right-click menu option; DEFAULT [FF112]
//user_pref("layout.forms.reveal-password-button.enabled", true); // always show icon in password fields
//user_pref("extensions.formautofill.addresses.enabled", false);
//user_pref("extensions.formautofill.creditCards.enabled", false);
//user_pref("security.mixed_content.block_active_content", true); // DEFAULT
// [NOTE] Enterprise users may need to disable this setting [1].
//user_pref("security.mixed_content.upgrade_display_content", true); // [DEFAULT FF127+]
    //user_pref("security.mixed_content.upgrade_display_content.audio", true); // [DEFAULT FF119+]
    //user_pref("security.mixed_content.upgrade_display_content.image", true); // [DEFAULT FF127+]
    //user_pref("security.mixed_content.upgrade_display_content.video", true); // [DEFAULT FF119+]
// [NOTE] Enterprise users may need to enable this setting [1].
user_pref("security.mixed_content.block_display_content", true);
//user_pref("dom.block_download_insecure", true); // DEFAULT
user_pref("pdfjs.enableScripting", false);
// 1=profile, 2=user, 4=application, 8=system, 16=temporary, 31=all
//user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF] DEFAULT
  // user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
//user_pref("browser.tabs.searchclipboardfor.middleclick", false); // DEFAULT WINDOWS macOS
//user_pref("browser.contentanalysis.default_allow", false); // [FF124+] [DEFAULT: false]
//user_pref("security.tls.version.enable-deprecated", false); // DEFAULT
//user_pref("dom.targetBlankNoOpener.enabled", true); // DEFAULT
//user_pref("privacy.window.name.update.enabled", true); // DEFAULT
//user_pref("network.http.windows-sso.enabled", false);
//user_pref("network.http.referer.defaultPolicy", 2); // DEFAULT
//user_pref("network.http.referer.defaultPolicy.pbmode", 2); // DEFAULT
//user_pref("network.http.referer.defaultPolicy.trackers", 1);
//user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 1);
//user_pref("network.http.sendRefererHeader", 2); // DEFAULT
//user_pref("network.http.referer.XOriginPolicy", 0); // DEFAULT
// [1] https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.userContext.ui.enabled", true);
//user_pref("privacy.userContext.enabled", true);
//user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
    //user_pref("browser.link.force_default_user_context_id_for_external_opens", true);
//user_pref("media.peerconnection.enabled", false);
//user_pref("privacy.webrtc.globalMuteToggles", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
//user_pref("media.peerconnection.ice.no_host", true);
//user_pref("media.gmp-provider.enabled", false);
//user_pref("media.gmp-widevinecdm.enabled", false);
//user_pref("media.eme.enabled", false);
    //user_pref("browser.eme.ui.enabled", false);
//user_pref("browser.urlbar.decodeURLsOnCopy", false); // DEFAULT
//user_pref("devtools.selfxss.count", 5);
//user_pref("javascript.options.asmjs", false);
// [6] https://github.com/arkenfox/user.js/issues/1791#issuecomment-1891273681
//user_pref("javascript.options.ion", false);
//user_pref("javascript.options.baselinejit", false);
//user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
//user_pref("javascript.options.wasm", false);
//user_pref("browser.safebrowsing.malware.enabled", false); // all checks happen locally
//user_pref("browser.safebrowsing.phishing.enabled", false); // all checks happen locally
//user_pref("browser.safebrowsing.blockedURIs.enabled", false); // all checks happen locally
    //user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
    //user_pref("browser.safebrowsing.provider.google4.updateURL", "");
    //user_pref("browser.safebrowsing.provider.google.gethashURL", "");
    //user_pref("browser.safebrowsing.provider.google.updateURL", "");
//user_pref("browser.safebrowsing.downloads.enabled", false); // all checks happen locally
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
      //user_pref("browser.safebrowsing.downloads.remote.url", "");
        //user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
        //user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// PREF: allow user to "ignore this warning" on SB warnings
// [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
//user_pref("browser.safebrowsing.allowOverride", true); // DEFAULT
//user_pref("accessibility.force_disabled", 1);
    //user_pref("devtools.accessibility.enabled", false);
// [2] https://github.com/arkenfox/user.js/issues/1175
//user_pref("identity.fxaccounts.enabled", false);
    //user_pref("identity.fxaccounts.autoconfig.uri", "");
//user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
// isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
// [NOTE] To remove all subscriptions, reset "dom.push.userAgentID"
//user_pref("dom.push.enabled", false);
    //user_pref("dom.push.userAgentID", "");
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
//user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
//user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
//user_pref("geo.provider.use_corelocation", false); // [MAC]
//user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
//user_pref("geo.provider.network.logging.enabled", true);
//user_pref("browser.region.update.enabled", false);
    //user_pref("browser.region.network.url", "");
//user_pref("extensions.blocklist.enabled", true); // DEFAULT
//user_pref("app.update.auto", false);
//user_pref("extensions.update.enabled", false);
//user_pref("browser.search.update", false);
//user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF FF57-108]
//user_pref("extensions.webextensions.restrictedDomains", "");
// [1] https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox#w_what-are-my-options-if-i-want-to-use-an-unsigned-add-on-advanced-users
//user_pref("xpinstall.signatures.required", false);
//user_pref("extensions.quarantinedDomains.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
//user_pref("toolkit.telemetry.dap_enabled", false); // DEFAULT [FF108]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
    //user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // DEFAULT
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
//user_pref("dom.private-attribution.submission.enabled", false);
    //user_pref("toolkit.telemetry.dap_helper", ""); // [OPTIONAL HARDENING]
    //user_pref("toolkit.telemetry.dap_leader", ""); // [OPTIONAL HARDENING]
//user_pref("default-browser-agent.enabled", false);
//user_pref("extensions.abuseReport.enabled", false);
//user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
// [NOTE] Shouldn't be needed for user.js, but browser forks may want to disable these prefs.
//user_pref("doh-rollout.disable-heuristics", true); // ensure DoH doesn't get enabled automatically
//user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
//user_pref("messaging-system.rsexperimentloader.enabled", false);
//user_pref("network.trr.confirmation_telemetry_enabled", false);
//user_pref("security.app_menu.recordEventTelemetry", false);
//user_pref("security.certerrors.mitm.priming.enabled", false);
//user_pref("security.certerrors.recordEventTelemetry", false);
//user_pref("security.protectionspopup.recordEventTelemetry", false);
//user_pref("signon.recipes.remoteRecipes.enabled", false);
//user_pref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
//user_pref("messaging-system.askForFeedback", true); // DEFAULT [FF120+]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // 10-40; adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
 * changes will be overwritten by the user.js when the application restarts.
 * To make lasting changes to preferences, you will have to edit the user.js.
user_pref("content.notify.interval", 100000);
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);
user_pref("privacy.history.custom", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);
user_pref("dom.security.https_first", true);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.profiles.enabled", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true);
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
// [NOTE] Dark Reader users may want to use 1000 [3].
//user_pref("nglayout.initialpaint.delay", 5); // DEFAULT; formerly 250
    //user_pref("nglayout.initialpaint.delay_in_oopif", 5); // DEFAULT
// Rather than wait until a page has completely downloaded to display it to the user,
//user_pref("content.notify.ontimer", true); // DEFAULT
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
// [2] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtab.preload", true); // DEFAULT
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);
//user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
    //user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT
//user_pref("browser.startup.preXulSkeletonUI", false);
//user_pref("dom.iframe_lazy_loading.enabled", true); // DEFAULT [FF121+]
//user_pref("gfx.webrender.all", true); // enables WR + additional features
//user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
//user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
    //user_pref("gfx.webrender.compositor.force-enabled", true); // enforce
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // LINUX
//user_pref("gfx.canvas.accelerated", true); // DEFAULT macOS LINUX [FF110]; not compatible with WINDOWS integrated GPUs
    user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; Chrome=4096
    user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512
    user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
//user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
    //user_pref("layers.gpu-process.force-enabled", true); // enforce
    //user_pref("layers.mlgpu.enabled", true); // LINUX
//user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
    //user_pref("media.hardware-video-decoding.force-enabled", true); // enforce
//user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS
//user_pref("media.ffmpeg.vaapi.enabled", true); // LINUX
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true); // enforce
//user_pref("browser.cache.disk.enable", true); // DEFAULT
//user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
//user_pref("browser.cache.disk.capacity", 512000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
//user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache
//user_pref("network.http.rcwn.enabled", false);
//user_pref("network.http.rcwn.small_resource_size_kb", 256); // DEFAULT
//user_pref("browser.cache.disk.metadata_memory_limit", 500); // default=250 (0.25 MB); limit of recent metadata we keep in memory for faster access
//user_pref("browser.cache.disk.preload_chunk_count", 4); // DEFAULT
//user_pref("browser.cache.frecency_half_life_hours", 6); // DEFAULT
//user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.check_doc_frequency", 3); // DEFAULT
//user_pref("browser.cache.disk.free_space_soft_limit", 10240); // default=5120 (5 MB)
//user_pref("browser.cache.disk.free_space_hard_limit", 2048); // default=1024 (1 MB)
user_pref("browser.cache.jsbc_compression_level", 3);
//user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
//user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT
//user_pref("browser.cache.memory.capacity", -1); // DEFAULT; 256000=256 MB; 512000=500 MB; 1048576=1GB, 2097152=2GB
//user_pref("browser.cache.memory.max_entry_size", 10240); // (10 MB); default=5120 (5 MB)
//user_pref("browser.sessionhistory.max_total_viewers", 4);
//user_pref("media.cache_size", 512000); // DEFAULT
// [2] https://github.com/arkenfox/user.js/pull/941
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072
//user_pref("media.memory_caches_combined_limit_kb", 524288); // DEFAULT; alt=1048576
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 5); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches
//user_pref("media.mediasource.enabled", true); // DEFAULT
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold
//user_pref("image.cache.size", 5242880); // DEFAULT; in MiB; alt=10485760 (cache images up to 10MiB in size)
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used
//user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
//user_pref("network.buffer.cache.count", 128); // default=24
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
    user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
    //user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.websocket.max-connections", 200); // DEFAULT
user_pref("network.http.pacing.requests.enabled", false);
    //user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
    //user_pref("network.http.pacing.requests.burst", 14); // default=10
//user_pref("network.dnsCacheEntries", 1000); // default=400
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
    //user_pref("network.dnsCacheExpirationGracePeriod", 240); // default=60; cache DNS entries for 4 minutes after they expire
//user_pref("network.dns.max_high_priority_threads", 40); // DEFAULT [FF 123?]
//user_pref("network.dns.max_any_priority_threads", 24); // DEFAULT [FF 123?]
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)
// [NOTE] Add prefs to "MY OVERRIDES" section and uncomment to enable them in your user.js.
// If the user follows through, pages can load faster since some
//user_pref("network.http.speculative-parallel-limit", 20); // DEFAULT (FF127+?)
user_pref("network.dns.disablePrefetch", true);
    user_pref("network.dns.disablePrefetchFromHTTPS", true); // [FF127+ false]
// [2] https://github.com/arkenfox/user.js/issues/1870#issuecomment-2220773972
//user_pref("dom.prefetch_dns_for_anchor_http_document", false); // [FF128+]
//user_pref("dom.prefetch_dns_for_anchor_https_document", false); // DEFAULT [FF128+]
//user_pref("network.preconnect", true); // DEFAULT
// Firefox preloads URLs that autocomplete when a user types into the address bar.
//user_pref("browser.urlbar.speculativeConnect.enabled", false);
//user_pref("browser.places.speculativeConnect.enabled", false);
//user_pref("network.modulepreload", true); // DEFAULT
user_pref("network.prefetch-next", false);
//user_pref("network.fetchpriority.enabled", true);
//user_pref("network.early-hints.enabled", true);
//user_pref("network.early-hints.preconnect.enabled", true);
//user_pref("network.early-hints.preconnect.max_connections", 10); // DEFAULT
user_pref("network.predictor.enabled", false);
// Prefetch page resources based on past user behavior.
//user_pref("network.predictor.enable-prefetch", false); // DEFAULT
//user_pref("network.predictor.enable-hover-on-ssl", false); // DEFAULT
//user_pref("network.predictor.preresolve-min-confidence", 60); // DEFAULT
//user_pref("network.predictor.preconnect-min-confidence", 90); // DEFAULT
//user_pref("network.predictor.prefetch-min-confidence", 100); // DEFAULT
//user_pref("network.predictor.prefetch-force-valid-for", 10); // DEFAULT; how long prefetched resources are considered valid and usable (in seconds) for the prediction modeling
//user_pref("network.predictor.prefetch-rolling-load-count", 10); // DEFAULT; the maximum number of resources that Firefox will prefetch in memory at one time based on prediction modeling
//user_pref("network.predictor.max-resources-per-entry", 250); // default=100
//user_pref("network.predictor.max-uri-length", 1000); // default=500
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
//user_pref("dom.webgpu.enabled", true);
    //user_pref("gfx.webgpu.force-enabled", true); // enforce
//user_pref("dom.webgpu.indirect-dispatch.enabled", true);
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT
//user_pref("browser.low_commit_space_threshold_mb", 3276); // default=200; WINDOWS LINUX
//user_pref("browser.low_commit_space_threshold_percent", 20); // default=5; LINUX
//user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000
//user_pref("dom.ipc.processCount", 8); // DEFAULT; Shared Web Content
//user_pref("dom.ipc.processCount.webIsolated", 1); // default=4; Isolated Web Content
//user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", true); // DEFAULT
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin
//user_pref("fission.webContentIsolationStrategy", 2);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin (high value)
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors
//user_pref("fission.webContentIsolationStrategy", 0);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors
 * credit urL: https://github.com/arkenfox/user.js                          *
user_pref("browser.privatebrowsing.vpnpromourl", "");
    //user_pref("browser.vpn_promo.enabled", false);
user_pref("extensions.getAddons.showPane", false); // HIDDEN
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
// [2] https://github.com/arkenfox/user.js/issues/1730
//user_pref("browser.shopping.experience2023.enabled", false); // DEFAULT
//user_pref("browser.shopping.experience2023.ads.exposure", false); // DEFAULT [FF121+]
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", true); // DEFAULT
//user_pref("browser.tabs.warnOnOpen", true); // DEFAULT
user_pref("browser.aboutConfig.showWarning", false);
//user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
    //user_pref("startup.homepage_welcome_url", "");
    //user_pref("startup.homepage_welcome_url.additional", "");
    //user_pref("startup.homepage_override_url", ""); // What's New page after updates
//user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.profiles.enabled", true);
// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true); 
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
//user_pref("browser.theme.dark-private-windows", false);
user_pref("browser.privateWindowSeparation.enabled", false);
//user_pref("browser.search.widget.inNavBar", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true);
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
//user_pref("cookiebanners.service.enableGlobalRules", true); // DEFAULT [FF121+]
//user_pref("cookiebanners.service.enableGlobalRules.subFrames", true); // DEFAULT [FF121+]
//user_pref("browser.translations.enable", true); // DEFAULT
    //user_pref("browser.translations.autoTranslate", true);
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000
//user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
//user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
//user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
// Some users find these helpful:
    //user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
    //user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
    //user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
//user_pref("gfx.use_text_smoothing_setting", true);
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
//user_pref("browser.urlbar.suggest.clipboard", false);
//user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.engines", false);
    //user_pref("browser.urlbar.suggest.searches", false);
//user_pref("browser.urlbar.quickactions.enabled", false);
//user_pref("browser.urlbar.shortcuts.quickactions", false);
//user_pref("browser.urlbar.suggest.weather", true); // DEFAULT [FF108]
    //user_pref("browser.urlbar.weather.ignoreVPN", false); // DEFAULT
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
//user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.trending.featureGate", false);
//user_pref("browser.urlbar.suggest.trending", false);
//user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
//user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
//user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
//user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
//user_pref("browser.urlbar.clipboard.featureGate", false); // [FF118+] [DEFAULT: true FF125+]
//user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]
//user_pref("browser.urlbar.suggest.engines", false);
//user_pref("browser.urlbar.autoFill", true); // [DEFAULT]
//user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);
//user_pref("browser.urlbar.maxRichResults", 5); // default=10
//user_pref("dom.text_fragments.enabled", true);
//user_pref("media.autoplay.default", 1); // DEFAULT
//user_pref("media.block-autoplay-until-in-foreground", true); // DEFAULT
// 0=sticky (default), 1=transient, 2=user
//user_pref("media.autoplay.blocking_policy", 2);
//user_pref("browser.startup.page", 3);
//user_pref("browser.startup.homepage", "about:blank");
//user_pref("browser.newtabpage.enabled", false);
// [1] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
//user_pref("browser.newtabpage.activity-stream.showSearch", true); // NTP Web Search [DEFAULT]
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Shortcuts
      //user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Shortcuts > Sponsored shortcuts [FF83+]
//user_pref("browser.newtabpage.activity-stream.showWeather", false); // Weather [FF128+ NIGHTLY]
    //user_pref("browser.newtabpage.activity-stream.system.showWeather", false); // Weather [FF128+ NIGHTLY]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
      //user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories [FF58+]  
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Recent Activity [DEFAULT]
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT]
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false); // Wallpapers
//user_pref("browser.newtabpage.activity-stream.default.sites", "");
//user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
//user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true); // DEFAULT
//user_pref("browser.toolbars.bookmarks.visibility", "newtab"); // DEFAULT
user_pref("extensions.pocket.enabled", false);
      //user_pref("extensions.pocket.api"," ");
      //user_pref("extensions.pocket.oAuthConsumerKey", " ");
      //user_pref("extensions.pocket.site", " ");
      //user_pref("extensions.pocket.showHome", false);
//user_pref("browser.download.folderList", 1); // DEFAULT
// Enforce user interaction for greater security.
//user_pref("browser.download.always_ask_before_handling_new_types", true);
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// false=the user is asked what to do
//user_pref("browser.download.useDownloadDir", false);
    //user_pref("browser.download.dir", "C:\Users\<YOUR_USERNAME>\AppData\Local\Temp"); // [WINDOWS]
//user_pref("browser.download.autohideButton", true); // DEFAULT
//user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
//user_pref("pdfjs.disabled", false); // DEFAULT
//user_pref("browser.helperApps.showOpenOptionForPdfJS", true); // DEFAULT
user_pref("browser.download.open_pdf_attachments_inline", true);
//user_pref("pdfjs.sidebarViewOnLoad", 2);
//user_pref("pdfjs.defaultZoomValue", page-width);
//user_pref("browser.search.openintab", true); // SEARCH BOX
//user_pref("browser.urlbar.openintab", true); // URL BAR
//user_pref("browser.link.open_newwindow", 3); // DEFAULT
//user_pref("browser.link.open_newwindow.restriction", 0);
//user_pref("browser.link.open_newwindow.override.external", -1); // DEFAULT
//user_pref("browser.tabs.loadInBackground", true); // DEFAULT
//user_pref("browser.tabs.loadDivertedInBackground", false); // DEFAULT
//user_pref("browser.tabs.loadBookmarksInTabs", true);
    //user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
//user_pref("accessibility.typeaheadfind", false); // enforce DEFAULT
//user_pref("middlemouse.contentLoadURL", false);
//user_pref("dom.disable_window_move_resize", true);
//user_pref("browser.tabs.insertRelatedAfterCurrent", true); // DEFAULT
//user_pref("browser.tabs.insertAfterCurrent", true);
//user_pref("browser.tabs.closeWindowWithLastTab", false);
//user_pref("accessibility.blockautorefresh", true);
//user_pref("browser.meta_refresh_when_inactive.disabled", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
//user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);
//user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
//user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("dom.disable_open_during_load", true); // DEFAULT
//user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT
//user_pref("browser.tabs.hoverPreview.enabled", true);
    //user_pref("browser.tabs.hoverPreview.showThumbnails", true); // DEFAULT
//user_pref("browser.backspace_action", 2); // DEFAULT
//user_pref("ui.key.menuAccessKeyFocuses", false);
    //user_pref("ui.key.menuAccessKey", 18); // DEFAULT
//user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
//user_pref("permissions.default.shortcuts", 2);
//user_pref("browser.taskbar.lists.frequent.enabled", false);
//user_pref("reader.parse-on-load.enabled", false);
//user_pref("layout.spellcheckDefault", 1); // DEFAULT
//user_pref("ui.SpellCheckerUnderlineStyle", 1);
//user_pref("ui.key.menuAccessKey", 0);
//user_pref("layout.css.moz-document.content.enabled", true);
//user_pref("browser.bookmarks.max_backups", 1); // default=15
//user_pref("browser.zoom.full", false);
//user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");
//user_pref("mousewheel.with_control.action", 3);
//user_pref("mousewheel.with_meta.action", 3);
//user_pref("browser.display.show_image_placeholders", false);
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76
//user_pref("layout.css.always_underline_links", false); // DEFAULT
//user_pref("view_source.wrap_long_lines", true);
//user_pref("devtools.debugger.ui.editor-wrapping", true);
//user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);
// show user agent styles in the inspector
//user_pref("devtools.inspector.showUserAgentStyles", true);
// show native anonymous content (like scrollbars or tooltips) and user
//user_pref("devtools.inspector.showAllAnonymousContent", true);
//user_pref("image.jxl.enabled", true);
 * credit urL: https://github.com/arkenfox/user.js                          *
//user_pref("privacy.trackingprotection.enabled", true); // enabled with "Strict"
//user_pref("privacy.trackingprotection.pbmode.enabled", true); // DEFAULT
//user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false); // DEFAULT
user_pref("browser.contentblocking.category", "strict");
//user_pref("privacy.trackingprotection.socialtracking.enabled", true); // enabled with "Strict"
    //user_pref("privacy.socialtracking.block_cookies.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.cryptomining.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // DEFAULT
//user_pref("privacy.trackingprotection.emailtracking.enabled", true); // enabled with "Strict"
//user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true); // DEFAULT
    //user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // enabled with "Strict"
//user_pref("privacy.annotate_channels.strict_list.enabled", true); // enabled with "Strict"
    //user_pref("privacy.annotate_channels.strict_list.pbmode.enabled", true); // DEFAULT
//user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+] enabled with "Strict"
    //user_pref("privacy.fingerprintingProtection.pbmode", true); // DEFAULT
//user_pref("privacy.query_stripping.enabled", true); // enabled with "Strict"
//user_pref("privacy.query_stripping.enabled.pbmode", true); // enabled with "Strict"
//user_pref("privacy.query_stripping.strip_list", ""); // DEFAULT
//user_pref("privacy.query_stripping.strip_on_share.enabled", true);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"); // MANUAL
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // MANUAL
// [1] https://github.com/arkenfox/user.js/issues/102#issuecomment-298413904
//user_pref("privacy.trackingprotection.lower_network_priority", true);
//user_pref("fission.autostart", true); // DEFAULT [DO NOT TOUCH]
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("security.sandbox.gpu.level", 1); // DEFAULT WINDOWS
// location to every website a user visits.
// context. dFPI isolates user's browsing data for each top-level eTLD+1, but is flexible enough to apply web
// [4] https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/
// [6] https://github.com/arkenfox/user.js/issues/1281
//user_pref("network.cookie.cookieBehavior", 5); // DEFAULT FF103+
//user_pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true); // DEFAULT
//user_pref("privacy.partition.network_state", true); // DEFAULT
    //user_pref("privacy.partition.serviceWorkers", true); // [DEFAULT: true FF105+]
    //user_pref("privacy.partition.network_state.ocsp_cache", true); // enabled with "Strict" [DEFAULT: true FF123+]
    //user_pref("privacy.partition.bloburl_per_partition_key", true); // [FF118+]
//user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true); // [DEFAULT: true FF109+]
//user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false); // [DEFAULT: false FF109+]
//user_pref("extensions.webcompat.enable_shims", true); // enabled with "Strict"
// haven’t received a top-level user interaction (including scroll) within the last 45 days.
// [5] https://github.com/arkenfox/user.js/issues/1089
//user_pref("privacy.purge_trackers.enabled", true); // DEFAULT
//user_pref("privacy.bounceTrackingProtection.enabled", true);
//user_pref("privacy.bounceTrackingProtection.enableDryRunMode", false); // false enables tracker data purging
// [3] https://github.com/arkenfox/user.js/issues/1640#issuecomment-1464093950
//user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
//user_pref("network.cookie.sameSite.schemeful", true);
//user_pref("browser.send_pings", false); // DEFAULT
// [2] https://github.com/arkenfox/user.js/issues/1586
//user_pref("beacon.enabled", false);
//user_pref("dom.battery.enabled", false);
// [2] https://github.com/arkenfox/user.js/issues/1732
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
    //user_pref("browser.uitour.url", "");
//user_pref("devtools.debugger.remote-enabled", false); // DEFAULT
// A privacy signal that tells the websites that the user
// [3] https://github.com/arkenfox/user.js/issues/1542#issuecomment-1279823954
user_pref("privacy.globalprivacycontrol.enabled", true);
    //user_pref("privacy.globalprivacycontrol.functionality.enabled", true); // [FF120+]
//user_pref("privacy.globalprivacycontrol.pbmode.enabled", true); // [FF120+]
// [3] https://github.com/arkenfox/user.js/issues/1576#issuecomment-1304590235
user_pref("security.OCSP.enabled", 0);
//user_pref("security.OCSP.require", true);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// By default, pinning enforcement is not applied if a user-installed
// certificate authority (CA) is present. However, this allows user-installed
// 0=disabled, 1=allow user MiTM (such as your antivirus) (default), 2=strict
//user_pref("security.cert_pinning.enforcement_level", 2);
// For users trying to get intranet sites on managed networks,
//user_pref("security.enterprise_roots.enabled", false);
    //user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
//user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT]
//user_pref("browser.contentanalysis.default_result", 0; // [FF127+] [DEFAULT]
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
//user_pref("security.ssl.require_safe_negotiation", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
// [1] https://github.com/arkenfox/user.js/issues/1661
//user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
//user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);
//user_pref("privacy.resistFingerprinting", true);
//user_pref("privacy.window.maxInnerWidth", 1600);
//user_pref("privacy.window.maxInnerHeight", 900);
// [1] https://github.com/arkenfox/user.js/issues/1618
//user_pref("browser.startup.blankWindow", false);
//user_pref("browser.display.use_system_colors", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// Firefox periodically saves the user's session so it can restore
user_pref("browser.sessionstore.interval", 60000); // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min
//user_pref("browser.sessionstore.privacy_level", 2);
//user_pref("toolkit.winRegisterApplicationRestart", false);
//user_pref("browser.shell.shortcutFavicons", false);
//user_pref("browser.helperApps.deleteTempFileOnExit", true); // DEFAULT [FF108]
//user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
//user_pref("privacy.sanitize.timeSpan", 0);
//user_pref("privacy.clearSiteData.cache", true);
//user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false until it respects "allow" site exceptions
//user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
    //user_pref("privacy.clearSiteData.siteSettings", false);
//user_pref("privacy.cpd.cache", true); // [DEFAULT]
//user_pref("privacy.clearHistory.cache", true);
//user_pref("privacy.cpd.formdata", true); // [DEFAULT]
//user_pref("privacy.cpd.history", true); // [DEFAULT]
    //user_pref("privacy.cpd.downloads", true); // not used; see note above
//user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
//user_pref("privacy.cpd.cookies", false);
//user_pref("privacy.cpd.sessions", true); // [DEFAULT]
//user_pref("privacy.cpd.offlineApps", false); // [DEFAULT]
//user_pref("privacy.clearHistory.cookiesAndStorage", false);
    //user_pref("privacy.cpd.openWindows", false); // Session Restore
   //user_pref("privacy.cpd.passwords", false);
   //user_pref("privacy.cpd.siteSettings", false);
   //user_pref("privacy.clearHistory.siteSettings", false);
user_pref("privacy.history.custom", true);
// [2] https://github.com/arkenfox/user.js/issues/1291
//user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//user_pref("privacy.clearOnShutdown.cache", true); // [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.cache", true); // [FF128+] [DEFAULT]
//user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT]
//user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT]
//user_pref("privacy.clearOnShutdown.history", true);   // [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // [FF128+] [DEFAULT]
    //user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT]
    //user_pref("privacy.clearOnShutdown_v2.siteSettings", false); // [FF128+] [DEFAULT]
//user_pref("privacy.clearOnShutdown.openWindows", true);
//user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
//user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
//user_pref("privacy.clearOnShutdown.sessions", true);  // Active Logins [DEFAULT]
//user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // Cookies, Site Data, Active Logins [FF128+]
//user_pref("browser.urlbar.trimURLs", true); // DEFAULT
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
//user_pref("browser.urlbar.showSearchTerms.enabled", false);
    //user_pref("browser.urlbar.showSearchTerms.featureGate", false); // DEFAULT
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
    //user_pref("browser.search.separatePrivateDefault", true); // DEFAULT
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // HIDDEN
user_pref("browser.search.suggest.enabled", false);
    //user_pref("browser.search.suggest.enabled.private", false); // DEFAULT
user_pref("browser.urlbar.suggest.searches", false);
// [1] https://github.com/arkenfox/user.js/issues/1257
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+] 
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
//user_pref("browser.fixup.alternate.enabled", false); // [DEFAULT FF104+]
//user_pref("browser.urlbar.autoFill", false);
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
user_pref("network.IDN_show_punycode", true);
user_pref("dom.security.https_first", true); // [DEFAULT FF129+]
//user_pref("dom.security.https_first_pbm", true); // [DEFAULT FF91+]
//user_pref("dom.security.https_first_schemeless", true); // [FF120+] [DEFAULT FF129+]
//user_pref("dom.security.https_only_mode_pbm", true); // Private Browsing windows only
//user_pref("dom.security.https_only_mode", true); // Normal + Private Browsing windows
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
//user_pref("dom.security.https_only_mode_send_http_background_request", true); // DEFAULT
    //user_pref("dom.security.https_only_fire_http_request_background_timer_ms", 3000); // DEFAULT
//user_pref("dom.security.https_only_mode.upgrade_local", false); // DEFAULT
//user_pref("network.trr.mode", 0); // DEFAULT
//user_pref("network.trr.max-fails", 5); // default=15
//user_pref("network.trr_ui.show_fallback_warning_option", false); // DEFAULT
//user_pref("network.trr.display_fallback_warning", false); // DEFAULT
//user_pref("network.trr.uri", "https://xxxx/dns-query");
    //user_pref("network.trr.custom_uri", "https://xxxx/dns-query");
//user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]
//user_pref("network.trr.resolvers", '[{ "name": "Cloudflare", "url": "https://mozilla.cloudflare-dns.com/dns-query" },{ "name": "SecureDNS", "url": "https://doh.securedns.eu/dns-query" },{ "name": "AppliedPrivacy", "url": "https://doh.appliedprivacy.net/query" },{ "name": "Digitale Gesellschaft (CH)", "url": "https://dns.digitale-gesellschaft.ch/dns-query" }, { "name": "Quad9", "url": "https://dns.quad9.net/dns-query" }]');
// in suboptimal routing between CDN origins and end users [2].
//user_pref("network.trr.disable-ECS", true); // DEFAULT
//user_pref("network.trr.allow-rfc1918", false); // DEFAULT
//user_pref("network.trr.confirmationNS", "skip"); // skip undesired DOH test connection
//user_pref("network.trr.skip-AAAA-when-not-supported", true); // [DEFAULT] If Firefox detects that your system does not have IPv6 connectivity, it will not request IPv6 addresses from the DoH server
//user_pref("network.trr.clear-cache-on-pref-change", true); // [DEFAULT] DNS+TRR cache will be cleared when a relevant TRR pref changes
//user_pref("network.trr.wait-for-portal", false); // [DEFAULT] set this to true to tell Firefox to wait for the captive portal detection before TRR is used
//user_pref("network.trr.excluded-domains", ""); // DEFAULT; comma-separated list of domain names to be resolved using the native resolver instead of TRR. This pref can be used to make /etc/hosts works with DNS over HTTPS in Firefox.
//user_pref("network.trr.builtin-excluded-domains", "localhost,local"); // DEFAULT; comma-separated list of domain names to be resolved using the native resolver instead of TRR
//user_pref("network.trr.mode", 2);
//user_pref("network.trr.ohttp.config_uri", "https://dooh.cloudflare-dns.com/.well-known/doohconfig");
//user_pref("network.trr.ohttp.uri", "https://dooh.cloudflare-dns.com/dns-query");
//user_pref("network.trr.ohttp.relay_uri", ""); // custom
//user_pref("network.trr.use_ohttp", true);
//user_pref("network.dns.echconfig.enabled", true); // use ECH for TLS Connections
//user_pref("network.dns.http3_echconfig.enabled", true); // use ECH for QUIC connections
//user_pref("network.dns.echconfig.fallback_to_origin_when_all_failed", false); // fallback to non-ECH without an authenticated downgrade signal
//user_pref("network.dns.disableIPv6", true);
//user_pref("network.proxy.socks_remote_dns", true);
//user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
//user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT FF118+]
//user_pref("network.notify.checkForProxies", false);
//user_pref("signon.rememberSignons", false);
    //user_pref("signon.rememberSignons.visibilityToggle", true); // DEFAULT
    //user_pref("signon.schemeUpgrades", true); // DEFAULT
    //user_pref("signon.showAutoCompleteFooter", true); // DEFAULT
    //user_pref("signon.autologin.proxy", false); // DEFAULT
// PREF: disable auto-filling username & password form fields
//user_pref("signon.autofillForms", false);
//user_pref("signon.autofillForms.autocompleteOff", true); // DEFAULT
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
//user_pref("signon.autofillForms.http", false); // DEFAULT
//user_pref("signon.generation.enabled", false);
// [NOTE] No usernames or passwords are sent to third-party sites.
// user_pref("signon.management.page.breach-alerts.enabled", false); 
    //user_pref("signon.management.page.breachAlertUrl", "");
//user_pref("browser.contentblocking.report.lockwise.enabled", false);
    //user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
//user_pref("signon.firefoxRelay.feature", "");
//user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
//user_pref("layout.forms.reveal-password-context-menu.enabled", true); // right-click menu option; DEFAULT [FF112]
//user_pref("layout.forms.reveal-password-button.enabled", true); // always show icon in password fields
//user_pref("extensions.formautofill.addresses.enabled", false);
//user_pref("extensions.formautofill.creditCards.enabled", false);
//user_pref("security.mixed_content.block_active_content", true); // DEFAULT
// [NOTE] Enterprise users may need to disable this setting [1].
//user_pref("security.mixed_content.upgrade_display_content", true); // [DEFAULT FF127+]
    //user_pref("security.mixed_content.upgrade_display_content.audio", true); // [DEFAULT FF119+]
    //user_pref("security.mixed_content.upgrade_display_content.image", true); // [DEFAULT FF127+]
    //user_pref("security.mixed_content.upgrade_display_content.video", true); // [DEFAULT FF119+]
// [NOTE] Enterprise users may need to enable this setting [1].
user_pref("security.mixed_content.block_display_content", true);
//user_pref("dom.block_download_insecure", true); // DEFAULT
user_pref("pdfjs.enableScripting", false);
// 1=profile, 2=user, 4=application, 8=system, 16=temporary, 31=all
//user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF] DEFAULT
  // user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
//user_pref("browser.tabs.searchclipboardfor.middleclick", false); // DEFAULT WINDOWS macOS
//user_pref("browser.contentanalysis.default_allow", false); // [FF124+] [DEFAULT: false]
//user_pref("security.tls.version.enable-deprecated", false); // DEFAULT
//user_pref("dom.targetBlankNoOpener.enabled", true); // DEFAULT
//user_pref("privacy.window.name.update.enabled", true); // DEFAULT
//user_pref("network.http.windows-sso.enabled", false);
//user_pref("network.http.referer.defaultPolicy", 2); // DEFAULT
//user_pref("network.http.referer.defaultPolicy.pbmode", 2); // DEFAULT
//user_pref("network.http.referer.defaultPolicy.trackers", 1);
//user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 1);
//user_pref("network.http.sendRefererHeader", 2); // DEFAULT
//user_pref("network.http.referer.XOriginPolicy", 0); // DEFAULT
// [1] https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.userContext.ui.enabled", true);
//user_pref("privacy.userContext.enabled", true);
//user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
    //user_pref("browser.link.force_default_user_context_id_for_external_opens", true);
//user_pref("media.peerconnection.enabled", false);
//user_pref("privacy.webrtc.globalMuteToggles", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
//user_pref("media.peerconnection.ice.no_host", true);
//user_pref("media.gmp-provider.enabled", false);
//user_pref("media.gmp-widevinecdm.enabled", false);
//user_pref("media.eme.enabled", false);
    //user_pref("browser.eme.ui.enabled", false);
//user_pref("browser.urlbar.decodeURLsOnCopy", false); // DEFAULT
//user_pref("devtools.selfxss.count", 5);
//user_pref("javascript.options.asmjs", false);
// [6] https://github.com/arkenfox/user.js/issues/1791#issuecomment-1891273681
//user_pref("javascript.options.ion", false);
//user_pref("javascript.options.baselinejit", false);
//user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
//user_pref("javascript.options.wasm", false);
//user_pref("browser.safebrowsing.malware.enabled", false); // all checks happen locally
//user_pref("browser.safebrowsing.phishing.enabled", false); // all checks happen locally
//user_pref("browser.safebrowsing.blockedURIs.enabled", false); // all checks happen locally
    //user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
    //user_pref("browser.safebrowsing.provider.google4.updateURL", "");
    //user_pref("browser.safebrowsing.provider.google.gethashURL", "");
    //user_pref("browser.safebrowsing.provider.google.updateURL", "");
//user_pref("browser.safebrowsing.downloads.enabled", false); // all checks happen locally
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
      //user_pref("browser.safebrowsing.downloads.remote.url", "");
        //user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
        //user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// PREF: allow user to "ignore this warning" on SB warnings
// [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
//user_pref("browser.safebrowsing.allowOverride", true); // DEFAULT
//user_pref("accessibility.force_disabled", 1);
    //user_pref("devtools.accessibility.enabled", false);
// [2] https://github.com/arkenfox/user.js/issues/1175
//user_pref("identity.fxaccounts.enabled", false);
    //user_pref("identity.fxaccounts.autoconfig.uri", "");
//user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
// isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
// [NOTE] To remove all subscriptions, reset "dom.push.userAgentID"
//user_pref("dom.push.enabled", false);
    //user_pref("dom.push.userAgentID", "");
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
//user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
//user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
//user_pref("geo.provider.use_corelocation", false); // [MAC]
//user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
//user_pref("geo.provider.network.logging.enabled", true);
//user_pref("browser.region.update.enabled", false);
    //user_pref("browser.region.network.url", "");
//user_pref("extensions.blocklist.enabled", true); // DEFAULT
//user_pref("app.update.auto", false);
//user_pref("extensions.update.enabled", false);
//user_pref("browser.search.update", false);
//user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF FF57-108]
//user_pref("extensions.webextensions.restrictedDomains", "");
// [1] https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox#w_what-are-my-options-if-i-want-to-use-an-unsigned-add-on-advanced-users
//user_pref("xpinstall.signatures.required", false);
//user_pref("extensions.quarantinedDomains.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
//user_pref("toolkit.telemetry.dap_enabled", false); // DEFAULT [FF108]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
    //user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // DEFAULT
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
//user_pref("dom.private-attribution.submission.enabled", false);
    //user_pref("toolkit.telemetry.dap_helper", ""); // [OPTIONAL HARDENING]
    //user_pref("toolkit.telemetry.dap_leader", ""); // [OPTIONAL HARDENING]
//user_pref("default-browser-agent.enabled", false);
//user_pref("extensions.abuseReport.enabled", false);
//user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
// [NOTE] Shouldn't be needed for user.js, but browser forks may want to disable these prefs.
//user_pref("doh-rollout.disable-heuristics", true); // ensure DoH doesn't get enabled automatically
//user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
//user_pref("messaging-system.rsexperimentloader.enabled", false);
//user_pref("network.trr.confirmation_telemetry_enabled", false);
//user_pref("security.app_menu.recordEventTelemetry", false);
//user_pref("security.certerrors.mitm.priming.enabled", false);
//user_pref("security.certerrors.recordEventTelemetry", false);
//user_pref("security.protectionspopup.recordEventTelemetry", false);
//user_pref("signon.recipes.remoteRecipes.enabled", false);
//user_pref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
//user_pref("messaging-system.askForFeedback", true); // DEFAULT [FF120+]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // 10-40; adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300); // 250-400; adjust this number to your liking
 * changes will be overwritten by the user.js when the application restarts.
 * To make lasting changes to preferences, you will have to edit the user.js.
user_pref("content.notify.interval", 100000);
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);
user_pref("privacy.history.custom", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);
user_pref("dom.security.https_first", true);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.profiles.enabled", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true);
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);
