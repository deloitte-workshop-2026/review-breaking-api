// API v2 — BREAKING: field names changed
// user_id  -> id
// full_name -> name
// phone_number -> phone (removed entirely in v2)

router.get('/users/:id', async (req, res) => {
  const user = await db.users.findById(req.params.id);
  res.json({
    id: user.user_id,       // was user_id
    name: user.full_name,   // was full_name
    email: user.email
    // phone removed
  });
});

// REMOVED: router.get('/api/v1/legacy', ...) — endpoint deleted
