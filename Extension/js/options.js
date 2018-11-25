let options = undefined

chrome.runtime.getPlatformInfo(function(info) {
  if(info.os == "mac")
  $('<tr><td><h5 id="pMiDOption" class="PtitleMenubar"></h5></td><td><div class="switch"><label><input type="checkbox" class="toggleTitleMenubar" /> <span class="lever"></span></label></div></td>').insertAfter('.enabledToggle')
  titleMenubarToggle = $('.toggleTitleMenubar')
  titleMenubarToggle.change(tMB);
})

$(document).ready(function() {
  var enabledToggle = $('.togglePresence'),
  youtubeToggle = $('.toggleYouTube'),
  youtubeMusicToggle = $('.toggleYouTubeMusic'),
  twitchToggle = $('.toggleTwitch'),
  soundcloudToggle = $('.toggleSoundCloud'),
  netflixToggle = $('.toggleNetflix'),
  kissanimeToggle = $('.toggleKissAnime'),
  jkanimeToggle = $('.toggleJKAnime')
  fimfictionToggle = $('.toggleFimFiction')
  mediaControlsToggle = $('.toggleMediaControls')
  checkForUpdatesToggle = $('.toggleCheckUpdates')
  systemStartupToggle = $('.toggleSystemStartup')
  darkThemeToggle = $('.toggleDarkTheme')

  enabledToggle.change(tEnabled);
  youtubeToggle.change(tYT);
  youtubeMusicToggle.change(tYTM);
  twitchToggle.change(tT);
  soundcloudToggle.change(tSC);
  netflixToggle.change(tN);
  kissanimeToggle.change(tKA);
  jkanimeToggle.change(tJKA);
  fimfictionToggle.change(tFF);
  mediaControlsToggle.change(tMC);
  checkForUpdatesToggle.change(tCFU);
  systemStartupToggle.change(tSS);
  darkThemeToggle.change(tdT);

  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(options.fimfiction == undefined) chrome.storage.sync.set($.extend(options, {fimfiction: true}))
    if(options.darkTheme == undefined) chrome.storage.sync.set($.extend(options, {darkTheme: true})); else {
      if(options.darkTheme) $('html').addClass("dark")
    }
    if(result.options == undefined) {
      chrome.storage.sync.set({options: {enabled: true, youtube: true, youtubeMusic: true, twitch: true, soundcloud: true, netflix: true, kissanime: true, jkanime: true, titleMenubar: true, mediaControls: true, checkForUpdates: true, systemStartup: true}})
      enabledToggle.prop('checked', true)
      youtubeToggle.prop('checked', true)
      youtubeMusicToggle.prop('checked', true)
      twitchToggle.prop('checked', true)
      soundcloudToggle.prop('checked', true)
      netflixToggle.prop('checked', true)
      kissanimeToggle.prop('checked', true)
      jkanimeToggle.prop('checked', true)
      fimfictionToggle.prop('checked', true)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', true)
      mediaControlsToggle.prop('checked', true)
      checkForUpdatesToggle.prop('checked', true)
      systemStartupToggle.prop('checked', true)
      darkThemeToggle.prop('checked', true)
    } else {
      enabledToggle.prop('checked', result.options.enabled)
      youtubeToggle.prop('checked', result.options.youtube)
      youtubeMusicToggle.prop('checked', result.options.youtubeMusic)
      twitchToggle.prop('checked', result.options.twitch)
      soundcloudToggle.prop('checked', result.options.soundcloud)
      netflixToggle.prop('checked', result.options.netflix)
      kissanimeToggle.prop('checked', result.options.kissanime)
      jkanimeToggle.prop('checked', result.options.jkanime)
      fimfictionToggle.prop('checked', result.options.fimfiction)
      if(titleMenubarToggle != undefined)
      titleMenubarToggle.prop('checked', result.options.titleMenubar)
      mediaControlsToggle.prop('checked', result.options.mediaControls)
      checkForUpdatesToggle.prop('checked', result.options.checkForUpdates)
      systemStartupToggle.prop('checked', result.options.systemStartup)
      darkThemeToggle.prop('checked', result.options.darkTheme)
    }
  })
})

function tEnabled() {
  options.enabled = !options.enabled
  sync()
}

function tYT() {
  options.youtube = !options.youtube
  sync()
}

function tYTM() {
  options.youtubeMusic = !options.youtubeMusic
  sync()
}

function tT() {
  options.twitch = !options.twitch
  sync()
}

function tSC() {
  options.soundcloud = !options.soundcloud
  sync()
}

function tN() {
  options.netflix = !options.netflix
  sync()
}

function tKA() {
  options.kissanime = !options.kissanime
  sync()
}

function tJKA() {
  options.jkanime = !options.jkanime
  sync()
}

function tFF() {
  options.fimfiction = !options.fimfiction
  sync()
}

function tMB() {
  options.titleMenubar = !options.titleMenubar
  sync()
}

function tMC() {
  options.mediaControls = !options.mediaControls
  sync()
}

function tCFU() {
  options.checkForUpdates = !options.checkForUpdates
  sync()
}

function tSS() {
  options.systemStartup = !options.systemStartup
  sync()
}

function tdT() {
  options.darkTheme = !options.darkTheme
  if(options.darkTheme) $('html').addClass("dark"); else $('html').removeClass("dark");
  sync()
}

function sync() {
  chrome.storage.sync.set({options: options})
}