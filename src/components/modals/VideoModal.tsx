import React, { useRef, useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer, { type VideoPlayerRef } from 'react-native-video-player';
import tw from '../../lib/tailwind';
import { style } from 'twrnc';

type VideoModalProps = {
  visible: boolean;
  onClose: () => void;
  videoUrl: string;
  audioUrl?:string
};

const VideoModal: React.FC<VideoModalProps> = ({ visible, onClose, videoUrl }) => {
    const [showVideo, setShowVideo] = useState(false);

// Wait for Modal to actually show before rendering Video
  const handleShow = () => setShowVideo(true);
  const handleHide = () => setShowVideo(false);
  const playerRef = useRef<VideoPlayerRef>(null);

  console.log(videoUrl);


  return (
<Modal
      visible={visible}
      animationType="slide"
      transparent
      onShow={handleShow}
      onRequestClose={onClose}
      onDismiss={handleHide}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
        <VideoPlayer
    ref={playerRef}
    endWithThumbnail
    thumbnail={{
      uri: '',
    }}
    source={{
      uri: videoUrl,
    }}
    onError={(e) => console.log(e)}
    style={tw``}
    disableControlsAutoHide
    videoHeight={600}
    videoWidth={700}
    showDuration={true}
  />
        {/* {showVideo && (
            <Video
              source={{ uri: videoUrl }}
              style={styles.video}
              controls
              resizeMode="contain"
              paused={false}
            />
          )} */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: 330,
    backgroundColor: 'black',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default VideoModal;
