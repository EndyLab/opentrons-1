import * as types from './mutation-types'
import { getUserProfile, isAuthenticated } from '../util'

const state = {
  isAuthenticated: isAuthenticated(),
  userProfile: getUserProfile(),
  port: null,
  fileName: '',
  lastModified: '',
  errors: [],
  warnings: false,
  tasks: [],
  currentIncrementPlaceable: 1,
  currentIncrementPlunger: 1,
  coordinates: {'x': 0, 'y': 0, 'z': 0, 'a': 0, 'b': 0},
  runLog: [],
  runLength: 0,
  busy: false,
  versions: [],
  uploading: false,
  running: false,
  detached: false,
  protocolFinished: false,
  paused: false,
  isSocketConnected: false,
  selectedRobot: 'ot-two.local:31950',
  connectedRobot: '', // TODO: default to blank
  robots: []
}

const mutations = {
  [types.SET_SELECTED_ROBOT] (state, address) {
    state.selectedRobot = address
  },
  [types.UPDATE_ROBOT_URLS] (state, robots) {
    state.robots = robots
  },
  [types.UPDATE_ROBOT_CONNECTION] (state, address) {
    state.connectedRobot = address
  },
  [types.UPDATE_SOCKET_CONNECTION] (state, isConnected) {
    state.isSocketConnected = isConnected
  },
  [types.AUTHENTICATE] (state, payload) {
    state.isAuthenticated = payload.isAuthenticated
    state.userProfile = payload.userProfile
  },
  [types.UPDATE_TASK_LIST] (state, payload) {
    state.tasks = payload.tasks
  },
  [types.UPDATE_FILE_NAME] (state, payload) {
    state.fileName = payload.fileName
  },
  [types.UPDATE_FILE_MODIFIED] (state, payload) {
    state.lastModified = payload.lastModified
  },
  [types.UPDATE_INCREMENT] (state, payload) {
    state.currentIncrementPlaceable = payload.currentIncrement
  },
  [types.UPDATE_INCREMENT_PLUNGER] (state, payload) {
    state.currentIncrementPlunger = payload.currentIncrementPlunger
  },
  [types.UPDATE_ERROR] (state, payload) {
    state.errors = payload.errors
  },
  [types.UPDATE_WARNINGS] (state, payload) {
    state.warnings = payload.warnings
  },
  [types.RESET_RUN_LOG] (state) {
    state.runLog = []
  },
  [types.UPDATE_RUN_LOG] (state, payload) {
    state.runLog.push(payload)
  },
  [types.UPDATE_POSITION] (state, payload) {
    state.coordinates = payload
  },
  [types.UPDATE_ROBOT_STATE] (state, payload) {
    state.busy = payload.busy
  },
  [types.UPDATE_ROBOT_VERSIONS] (state, payload) {
    state.versions = payload.versions
  },
  [types.UPLOADING] (state, payload) {
    state.uploading = payload
  },
  [types.UPDATE_RUNNING] (state, payload) {
    state.running = payload.running
  },
  [types.UPDATE_DETACHED] (state, payload) {
    state.detached = payload.detached
  },
  [types.UPDATE_PROTOCOL_FINISHED] (state, payload) {
    state.protocolFinished = payload.running
  },
  [types.UPDATE_RUN_LENGTH] (state, payload) {
    state.runLength = payload.commands_total
  },
  [types.UPDATE_PAUSED] (state, payload) {
    state.paused = payload
  }
}

export default {
  mutations,
  state
}
