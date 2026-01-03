export interface TrackAttachment {
  url: string
}

export interface TrackDetailsAttributes {
  title: string
  lyrics: string | null
}

export interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

export interface TrackDetailsResource {
  id: string
  attributes: TrackDetailsAttributes
}

export interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}

export interface TrackDetailsResponse {
  data: TrackDetailsResource
}

export interface TrackListResponse {
  data: TrackListItemResource[]
}
