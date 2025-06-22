#!/bin/bash

# Test script for local static build
echo "🔧 Building static site..."
npm run build

if [ -d "out" ]; then
    echo "✅ Build successful! Output directory created."
    echo "📁 Contents of out/ directory:"
    ls -la out/
    echo ""
    echo "🌐 Starting local server on port 3001..."
    echo "Visit: http://localhost:3001/web/"
    npx serve out -p 3001
else
    echo "❌ Build failed! No output directory found."
    exit 1
fi
