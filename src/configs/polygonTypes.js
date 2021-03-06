import {
  litMarker,
  footprintMarker,
  buildMarker,
  soonMarker,
  notAvailableMarker
} from './markers'

export const polygonTypes = {
  ServiceAvailable: {
    status: 'Footprint',
    event: 'footprint',
    color: '#A00E0D',
    marker: footprintMarker
  },
  BuildCommenced: {
    status: 'UnderConstruction',
    event: 'construction-commenced',
    color: '#000000',
    marker: buildMarker
  },
  ComingSoon: {
    status: 'ComingSoon',
    event: 'coming-soon',
    color: '#ffff9990',
    marker: soonMarker
  }
}
