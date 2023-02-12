export interface Offer {
  type: string;
  url: string;
  status: string;
}

export interface Venue {
  street_address: string;
  country: string;
  city: string;
  latitude: string;
  name: string;
  location: string;
  postal_code: string;
  region: string;
  longitude: string;
}

export interface Options {
  display_listen_unit: boolean;
}

export interface Link {
  type: string;
  url: string;
}

export interface Artist {
  thumb_url: string;
  mbid: string;
  facebook_page_url: string;
  image_url: string;
  tracker_count: number;
  tracking: any[];
  upcoming_event_count: number;
  url: string;
  support_url: string;
  show_multi_ticket: boolean;
  name: string;
  options: Options;
  links: Link[];
  artist_optin_show_phone_number: boolean;
  id: string;
}

export interface ArtistEvent {
  offers: Offer[];
  venue: Venue;
  starts_at: string;
  artist?: Artist;
  festival_datetime_display_rule: string;
  description: string;
  lineup: string[];
  festival_start_date: string;
  bandsintown_plus: boolean;
  title: string;
  artist_id: string;
  url: string;
  datetime_display_rule: string;
  datetime: string;
  on_sale_datetime: string;
  id: string;
  ends_at: string;
  festival_end_date: string;
  event_image_url: string;
}
