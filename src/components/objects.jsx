import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { Card } from './card';

export default function() {
  const {
    fetchCameras,
    fetchImages,
    fetchObjects,
  } = useActions();


  const { objects, loading, error } = useSelector(state => state.objects)
  const cameras = useSelector(state => state.cameras);
  const images = useSelector(state => state.images);
  const { filter, search } = useSelector(state => state.filter);

  useEffect(() => {
    fetchCameras();
    fetchImages();
    fetchObjects();
  }, []);


  if (loading) {
    return <h1> Идет загрузка </h1>
  }

  if (error || cameras.error) {
    return <h1>{error ?? objects.error}!</h1>
  }


  const filtered = filter === 'all' ? objects : objects.filter((o) => o.status === filter);
  const renderList = filtered.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div id='objects'>
      { renderList.map((object) => <Card key={object.id} objectData={{ object, cameras, images }} />)}
    </div>
  );
}
