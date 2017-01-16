import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectImageAction, selectVideoAction, searchMediaAction } from '../actions/mediaActions';

import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

class MediaGalleryPage extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  handleSearch(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    if (this.query !== null) {
      dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  handleSelectImage(selectedImage) {
    const { dispatch } = this.props;
    dispatch(selectImageAction(selectedImage));
  }

  handleSelectVideo(selectedVideo) {
    const { dispatch } = this.props;
    dispatch(selectVideoAction(selectedVideo));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(searchMediaAction('rain'));
  }

  render() {
    const { images, videos, selectedImage, selectedVideo } = this.props; 
    return (
      <div className="container-fluid">
        {
          images ? 
            (
              <div>
                <input type="text" ref={ref => (this.query = ref)} />
                <input 
                  type="submit"
                  className="btn btn-primary"
                  value="search library"
                  onClick={this.handleSearch}
                />
                <div className="row">
                  <PhotoPage
                    images={images}
                    selectedImage={selectedImage}
                    onHandleSelectImage={this.handleSelectImage}
                  />
                  <VideoPage
                    videos={videos}
                    selectedVideo={selectedVideo}
                    onHandleSelectVideo={this.handleSelectVideo}
                  />
                </div>
              </div>
            )
          : 
            'loading spinner...'
        }
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({ images, videos }) => {
  return {
    images: images[0],
    videos: videos[0],
    selectedImage: images.selectedImage,
    selectedVideo: videos.selectedVideo
  };
};

export default connect(mapStateToProps)(MediaGalleryPage);