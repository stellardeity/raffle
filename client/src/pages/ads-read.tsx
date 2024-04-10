import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Image } from "antd";

import { useFollowAdsMutation, useGetAdsByIdMutation } from "@/entities/adsApi";
import { useLazyGetUserProfileQuery } from "@/entities/usersApi";

export const AdsRead: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [triggerGetUser, { data: profile }] = useLazyGetUserProfileQuery();
  const [getAdsById, { data: ads, isLoading, isError }] = useGetAdsByIdMutation();
  const [followAds] = useFollowAdsMutation();

  if (isError) {
    navigate("/signin");
  }

  useEffect(() => {
    triggerGetUser();
  }, []);

  useEffect(() => {
    params?.id && getAdsById(params.id);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      <h1>{ads?.title}</h1>
      <p>{ads?.category}</p>
      {ads?.attributes.map((item) => {
        return (
          <h3 key={item.name}>
            {item.name} : {item.value}
          </h3>
        );
      })}
      {ads?.user_id === profile?.id && <Button onClick={() => navigate(`/ads/edit/${ads.id}`)}>Изменить</Button>}
      {ads?.user_id !== profile?.id && <Button onClick={() => followAds(ads.id)}>Рафл</Button>}
    </>
  );
};
