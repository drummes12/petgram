import React from 'react'
import {
  TextBlock,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders'
import 'react-placeholder/lib/reactPlaceholder.css'

export const photoCardSkeleton = (
  <div style={{ paddin: 0, margin: 0}}>
    <RectShape
      color='#eee'
      style={{
        borderRadius: 10,
        display: 'block',
        height: 0,
        overflow: 'hidden',
        padding: '56.25% 0 0 0',
        position: 'relative',
        width: '100%',
      }}
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'right',
      }}
    >
      <TextBlock color='#eee' rows={1} style={{ width: 120 }} />
      <RoundShape
        color='#eee'
        style={{
          width: 40,
          height: 40,
          marginLeft: 4,
          marginRight: 4,
          marginTop: -6,
        }}
      />
    </div>
  </div>
)

export const categorySkeleton = (
  <div
    style={{
      margin: '0 8px',
      display: 'flex',
      flexDirection: 'column',
      width: 75,
      alignItems: 'center',
    }}
  >
    <RoundShape
      color='#eee'
      style={{
        width: 75,
        height: 75,
      }}
    />
    <RoundShape
      color='#eee'
      style={{
        width: 24,
        height: 24,
        marginTop: -12,
      }}
    />
  </div>
)
