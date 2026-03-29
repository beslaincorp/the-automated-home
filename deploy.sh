#!/bin/bash
# Atlas Content Site — Deploy to Vercel
# Run: bash deploy.sh

export PATH="$PATH:$(npm config get prefix)/bin"

echo "=== Atlas Content Site Deploy ==="
echo ""
echo "Step 1: Login to Vercel (opens browser)"
NODE_TLS_REJECT_UNAUTHORIZED=0 vercel login
echo ""
echo "Step 2: Deploy"
NODE_TLS_REJECT_UNAUTHORIZED=0 vercel --yes
echo ""
echo "Done! Your site URL is printed above."
