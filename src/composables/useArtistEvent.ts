import type { ArtistEvent } from "@/types/ArtistEvent";
import { ref, provide, inject, computed, type InjectionKey } from "vue";
import { useFetch } from "./useFetch";
import { endpoint, eventTitles } from "../constants";

const useArtistEventKey: InjectionKey<ReturnType<typeof provideArtistEvent>> =
  Symbol("$artist-events");

export const provideArtistEvent = () => {
  const allEvents = ref<Array<ArtistEvent>>([]);
  const featuredEvents = ref<Array<ArtistEvent>>([]);
  const isloading = ref(false);

  const { callHttp } = useFetch();

  const getEventsData = async () => {
    isloading.value = true;
    try {
      const data = await callHttp<Array<ArtistEvent>>(endpoint);
      const mappedData = data.map((d, index) => {
        return {
          ...d,
          event_image_url: eventTitles[index].image,
          title: d.title || eventTitles[index].name,
        };
      });
      featuredEvents.value = mappedData;
      allEvents.value = mappedData.slice(2);
      isloading.value = false;
    } catch (error) {
      isloading.value = false;
      console.log(error);
    }
  };

  // Events Search
  const searchTerm = ref("");
  const allEventsData = computed(() => {
    return allEvents.value.filter((artist) => {
      return artist.title
        ?.toLowerCase()
        .includes(searchTerm.value.toLowerCase());
    });
  });

  const data = {
    getEventsData,
    allEventsData,
    featuredEvents,
    isloading,
    searchTerm,
  };

  provide(useArtistEventKey, data);
  return data;
};

export function useArtistEvent() {
  const injection = inject(useArtistEventKey);
  if (injection == null) {
    throw new Error("parent component needs to provide artistEvent first");
  }

  return injection;
}
