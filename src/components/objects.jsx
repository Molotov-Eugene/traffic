import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { Card } from './card';

export default function() {
  const {
    fetchCameras,
    fetchImages,
    fetchObjects,
    updateObjectStatus,
  } = useActions();

  const { objects, loading, error } = useSelector(state => state.objects)
  const cameras = useSelector(state => state.cameras);
  const images = useSelector(state => state.images)

  useEffect(() => {
    fetchCameras();
    fetchImages();
    fetchObjects();
  }, []);

  if (loading || images.loading || cameras.loading) {
    return <h1> Идет загрузка </h1>
  }

  if (error || cameras.error) {
    return <h1>{error ?? objects.error}!</h1>
  }

  return (
    <div id='objects'>
      {objects.map((object) => <Card key={object.id} objectData={{ object, cameras, images }} />)}
    </div>
  );
}
