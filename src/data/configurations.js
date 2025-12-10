/**
 * Configurations Aggregator
 * Imports all configurations from individual files
 */

// ========================================
// CLEANUP
// ========================================
import disableFaxService from './configurations/cleanup/disable-fax-service.js';
import disableMobileHotspot from './configurations/cleanup/disable-mobile-hotspot.js';
import disableXboxLiveServices from './configurations/cleanup/disable-xbox-live-services.js';
import remove3dViewer from './configurations/cleanup/remove-3d-viewer.js';
import removeAlarmsClock from './configurations/cleanup/remove-alarms-clock.js';
import removeBingNews from './configurations/cleanup/remove-bing-news.js';
import removeBingWeather from './configurations/cleanup/remove-bing-weather.js';
import removeCamera from './configurations/cleanup/remove-camera.js';
import removeCasualGames from './configurations/cleanup/remove-casual-games.js';
import removeClipchamp from './configurations/cleanup/remove-clipchamp.js';
import removeGetHelp from './configurations/cleanup/remove-get-help.js';
import removeMailCalendar from './configurations/cleanup/remove-mail-calendar.js';
import removeMaps from './configurations/cleanup/remove-maps.js';
import removeMicrosoftTips from './configurations/cleanup/remove-microsoft-tips.js';
import removeMixedReality from './configurations/cleanup/remove-mixed-reality.js';
import removeOfficeHub from './configurations/cleanup/remove-office-hub.js';
import removeOnenoteUwp from './configurations/cleanup/remove-onenote-uwp.js';
import removePaint3d from './configurations/cleanup/remove-paint-3d.js';
import removeSkypePreinstalled from './configurations/cleanup/remove-skype-preinstalled.js';
import removeSolitaire from './configurations/cleanup/remove-solitaire.js';
import removeTeamsChat from './configurations/cleanup/remove-teams-chat.js';
import removeVoiceRecorder from './configurations/cleanup/remove-voice-recorder.js';
import removeWidgets from './configurations/cleanup/remove-widgets.js';
import removeXboxAppsComplete from './configurations/cleanup/remove-xbox-apps-complete.js';
import removeXboxGamebar from './configurations/cleanup/remove-xbox-gamebar.js';
import removeYourPhone from './configurations/cleanup/remove-your-phone.js';

// ========================================
// FILE EXPLORER
// ========================================
import disableFolderGrouping from './configurations/file-explorer/disable-folder-grouping.js';
import disableQuickAccess from './configurations/file-explorer/disable-quick-access.js';
import disableThumbnailCache from './configurations/file-explorer/disable-thumbnail-cache.js';
import launchFolderWindows from './configurations/file-explorer/launch-folder-windows.js';
import showDrivesNoMedia from './configurations/file-explorer/show-drives-no-media.js';
import showFileExtensions from './configurations/file-explorer/show-file-extensions.js';
import showFullPathTitle from './configurations/file-explorer/show-full-path-title.js';
import showHiddenFiles from './configurations/file-explorer/show-hidden-files.js';
import showStatusBar from './configurations/file-explorer/show-status-bar.js';

// ========================================
// GAMING
// ========================================
import competitiveGamingOptimizations from './configurations/gaming/competitive-gaming-optimizations.js';
import disableGameDvr from './configurations/gaming/disable-game-dvr.js';
import disableGameMode from './configurations/gaming/disable-game-mode.js';
import disableNvidiaTelemetry from './configurations/gaming/disable-nvidia-telemetry.js';
import enableHardwareGpuScheduling from './configurations/gaming/enable-hardware-gpu-scheduling.js';

// ========================================
// NETWORK
// ========================================
import disableWifiSense from './configurations/network/disable-wifi-sense.js';
import setDnsCloudflare from './configurations/network/set-dns-cloudflare.js';

// ========================================
// PERFORMANCE
// ========================================
import cpuMaxPerformance from './configurations/performance/cpu-max-performance.js';
import disableBackgroundApps from './configurations/performance/disable-background-apps.js';
import disableHibernation from './configurations/performance/disable-hibernation.js';
import disableStartupDelay from './configurations/performance/disable-startup-delay.js';
import disableSysmain from './configurations/performance/disable-sysmain.js';
import disableTransparency from './configurations/performance/disable-transparency.js';
import disableVisualEffects from './configurations/performance/disable-visual-effects.js';
import disableWindowsDefender from './configurations/performance/disable-windows-defender.js';
import disableWindowsTips from './configurations/performance/disable-windows-tips.js';
import highPerformancePower from './configurations/performance/high-performance-power.js';
import ultimatePerformancePower from './configurations/performance/ultimate-performance-power.js';

// ========================================
// PRIVACY
// ========================================
import disableActivityHistory from './configurations/privacy/disable-activity-history.js';
import disableAdvertisingId from './configurations/privacy/disable-advertising-id.js';
import disableAppSuggestions from './configurations/privacy/disable-app-suggestions.js';
import disableCeip from './configurations/privacy/disable-ceip.js';
import disableCortana from './configurations/privacy/disable-cortana.js';
import disableDiagnosticData from './configurations/privacy/disable-diagnostic-data.js';
import disableErrorReporting from './configurations/privacy/disable-error-reporting.js';
import disableFeedbackRequests from './configurations/privacy/disable-feedback-requests.js';
import disableLocationTracking from './configurations/privacy/disable-location-tracking.js';
import disableTailoredExperiences from './configurations/privacy/disable-tailored-experiences.js';
import disableTelemetry from './configurations/privacy/disable-telemetry.js';
import disableTimeline from './configurations/privacy/disable-timeline.js';

// ========================================
// START MENU
// ========================================
import disableBingSearch from './configurations/start-menu/disable-bing-search.js';
import leftAlignTaskbarWin11 from './configurations/start-menu/left-align-taskbar-win11.js';
import removeRecentItemsStart from './configurations/start-menu/remove-recent-items-start.js';
import showAllTrayIcons from './configurations/start-menu/show-all-tray-icons.js';

// ========================================
// UPDATES
// ========================================
import disableAutoRestartUpdates from './configurations/updates/disable-auto-restart-updates.js';
import disableWindowsUpdate from './configurations/updates/disable-windows-update.js';

// ========================================
// VISUAL
// ========================================
import classicContextMenuWin11 from './configurations/visual/classic-context-menu-win11.js';
import darkMode from './configurations/visual/dark-mode.js';
import disableTaskbarThumbnails from './configurations/visual/disable-taskbar-thumbnails.js';
import hideSearchBox from './configurations/visual/hide-search-box.js';
import hideTaskviewButton from './configurations/visual/hide-taskview-button.js';
import removeOnedrive from './configurations/visual/remove-onedrive.js';
import showFileCheckboxes from './configurations/visual/show-file-checkboxes.js';
import showSecondsClock from './configurations/visual/show-seconds-clock.js';
import smallTaskbarIcons from './configurations/visual/small-taskbar-icons.js';

export const configurations = [
  // ========================================
  // CLEANUP
  // ========================================
  disableFaxService,
  disableMobileHotspot,
  disableXboxLiveServices,
  remove3dViewer,
  removeAlarmsClock,
  removeBingNews,
  removeBingWeather,
  removeCamera,
  removeCasualGames,
  removeClipchamp,
  removeGetHelp,
  removeMailCalendar,
  removeMaps,
  removeMicrosoftTips,
  removeMixedReality,
  removeOfficeHub,
  removeOnenoteUwp,
  removePaint3d,
  removeSkypePreinstalled,
  removeSolitaire,
  removeTeamsChat,
  removeVoiceRecorder,
  removeWidgets,
  removeXboxAppsComplete,
  removeXboxGamebar,
  removeYourPhone,

  // ========================================
  // FILE EXPLORER
  // ========================================
  disableFolderGrouping,
  disableQuickAccess,
  disableThumbnailCache,
  launchFolderWindows,
  showDrivesNoMedia,
  showFileExtensions,
  showFullPathTitle,
  showHiddenFiles,
  showStatusBar,

  // ========================================
  // GAMING
  // ========================================
  competitiveGamingOptimizations,
  disableGameDvr,
  disableGameMode,
  disableNvidiaTelemetry,
  enableHardwareGpuScheduling,

  // ========================================
  // NETWORK
  // ========================================
  disableWifiSense,
  setDnsCloudflare,

  // ========================================
  // PERFORMANCE
  // ========================================
  cpuMaxPerformance,
  disableBackgroundApps,
  disableHibernation,
  disableStartupDelay,
  disableSysmain,
  disableTransparency,
  disableVisualEffects,
  disableWindowsDefender,
  disableWindowsTips,
  highPerformancePower,
  ultimatePerformancePower,

  // ========================================
  // PRIVACY
  // ========================================
  disableActivityHistory,
  disableAdvertisingId,
  disableAppSuggestions,
  disableCeip,
  disableCortana,
  disableDiagnosticData,
  disableErrorReporting,
  disableFeedbackRequests,
  disableLocationTracking,
  disableTailoredExperiences,
  disableTelemetry,
  disableTimeline,

  // ========================================
  // START MENU
  // ========================================
  disableBingSearch,
  leftAlignTaskbarWin11,
  removeRecentItemsStart,
  showAllTrayIcons,

  // ========================================
  // UPDATES
  // ========================================
  disableAutoRestartUpdates,
  disableWindowsUpdate,

  // ========================================
  // VISUAL
  // ========================================
  classicContextMenuWin11,
  darkMode,
  disableTaskbarThumbnails,
  hideSearchBox,
  hideTaskviewButton,
  removeOnedrive,
  showFileCheckboxes,
  showSecondsClock,
  smallTaskbarIcons,
];

/**
 * Get configurations by category
 */
export const getConfigsByCategory = (categoryId) => {
  return configurations.filter(config => config.category === categoryId);
};

/**
 * Get recommended configurations
 */
export const getRecommendedConfigs = () => {
  return configurations.filter(config => config.recommended);
};

/**
 * Get configuration by ID
 */
export const getConfigById = (id) => {
  return configurations.find(config => config.id === id);
};
