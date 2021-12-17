import React from "react";
import Poster from "./Poster.component";

function MovieCard() {
  const images = [
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICA4M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-yrdvbkhvsq-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODUwayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-mjmxxdmdvx-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA4NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00132474-krjpcfbdra-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTY4IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00310569-mjkvhbvqtc-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTclICA4M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-yrdvbkhvsq-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODUwayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-mjmxxdmdvx-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA4NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00132474-krjpcfbdra-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTY4IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00310569-mjkvhbvqtc-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318064-zhffpudkae-portrait.jpg",
  ];
  return (
    <div className=" container mx-auto  my-20 flex flex-col items-start ">
      <h1 className=" text-2xl font-semibold ">Movies</h1>
      <div className="flex flex-wrap gap-10">
        {images.map((image) => (
          <Poster src={image} />
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
