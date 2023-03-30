/* eslint-disable prettier/prettier */
import { ArrowDown, ArrowUp } from '@components/icons'
import React, { useEffect } from 'react'
import {
    LayoutAnimation,
    Platform,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native'
import styles from './Accordion.styles'

interface AccordionProps {
    component?: React.ReactElement;
    children: React.ReactElement;
    expanded: boolean;
    tittle?: string;
    onPress: () => void
}

const Accordion = ({
    component,
    children,
    expanded,
    tittle,
    onPress
}: AccordionProps) => {

    const accordionStyles = !expanded ? {
        ...styles.accordion__container,
        ...styles.accordion__bottomRadius
    } : { ...styles.accordion__container }

    const handleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress()
    }

    useEffect(() => {
        if (Platform.OS === 'android')
            UIManager.setLayoutAnimationEnabledExperimental(true)
    }, [])

    return (
        <View>
            <TouchableOpacity style={accordionStyles} onPress={handleExpand}>
                {component && component}
                {!component &&
                    <View style={styles.accordion__containerText}>
                        <Text style={styles.accordion__tittle}>{tittle}</Text>
                        {!expanded && <ArrowDown customSize='16' />}
                        {expanded && <ArrowUp customSize='16' />}
                    </View>}


            </TouchableOpacity>
            <View style={styles.accordion__spacer} />
            {expanded &&
                <View style={styles.accordion__children}>
                    {children}
                </View>
            }
        </View>
    )
}

export default Accordion