/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity } from "react-native"
import SoundPlayer from 'react-native-sound-player';
import styles from './Radio.styles'
import { Pause, Play } from '@components/icons';
import { COLORS_APP } from '@Constants/colors';

const imgRadio = require('@assets/images/itsa_radio.png');

const Radio = () => {

    const [isPaused, setIsPaused] = useState(true)
    const [isStarted, setIsStarted] = useState(false)

    const startAudio = () => {
        try {
            // or play from url
            SoundPlayer.playUrl('http://itsaradio.itsa.edu.co:8000/ITSARadio106.6.mp3')
            setIsStarted(true)
        } catch (e) {
            console.log(`cannot play the sound file`, e)
            setIsPaused(true)
        }
    }

    const handlePlay = () => {
        if (isPaused) {
            setIsPaused(false)
            if (!isStarted) return startAudio()
            return SoundPlayer.play()
        }
        setIsPaused(true)
        return SoundPlayer.pause()
    }

    useEffect(() => SoundPlayer.stop(), [])

    return (
        <View style={styles.radio__container}>
            <Image
                alt='logo__radio__itsa'
                source={imgRadio}
                style={styles.radio__image}
            />
            <TouchableOpacity style={styles.radio__button} onPress={handlePlay}>
                {isPaused && <Play color={COLORS_APP.WHITE} />}
                {!isPaused && <Pause color={COLORS_APP.WHITE} />}
            </TouchableOpacity>
        </View>
    )
}

export default Radio