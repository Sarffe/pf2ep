declare global {
    module PIXI {
        export {
            AccessibilityManager,
            Application,
            CLEAR_MODES,
            Circle,
            Container,
            DisplayObject,
            Ellipse,
            Extract,
            Filter,
            FilterState,
            FilterSystem,
            Geometry,
            Graphics,
            IDestroyOptions,
            ITextStyle,
            InteractionData,
            InteractionEvent,
            InteractionManager,
            InteractivePointerEvent,
            LegacyGraphics,
            Mesh,
            ParticleRenderer,
            Point,
            Polygon,
            Prepare,
            Program,
            Rectangle,
            RenderTexture,
            Renderer,
            RoundedRectangle,
            Shader,
            Sprite,
            Text,
            TextStyle,
            Texture,
            TilingSpriteRenderer,
            Transform,
            UniformGroup,
            filters,
            particles,
            smooth,
            utils,
        };
    }
}

import * as smooth from "@pixi/graphics-smooth";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";
import * as particles from "pixi-particles";
import {
    AccessibilityManager,
    Application,
    Circle,
    CLEAR_MODES,
    Container,
    DisplayObject,
    Ellipse,
    Extract,
    Filter,
    filters,
    FilterState,
    FilterSystem,
    Geometry,
    Graphics as LegacyGraphics,
    IDestroyOptions,
    InteractionData,
    InteractionEvent,
    InteractionManager,
    InteractivePointerEvent,
    ITextStyle,
    Mesh,
    ParticleRenderer,
    Point,
    Polygon,
    Prepare,
    Program,
    Rectangle,
    Renderer,
    RenderTexture,
    RoundedRectangle,
    Shader,
    Sprite,
    Text,
    TextStyle,
    Texture,
    TilingSpriteRenderer,
    Transform,
    UniformGroup,
    utils,
} from "pixi.js";